<template>
    <div ref="el" class="h-full align-middle w-full">
        <!-- if teleporting areas of interest to side of RAMP container -->
        <div class="flex teleport-container sm:flex-row flex-col h-full w-full" v-if="config.teleportAOI">
            <div class="overflow-x-auto overflow-y-hidden sm:self-start flex-2 sticky z-40">
                <div :id="`ramp-map-${slideIdx}`" class="bg-gray-200 rv-map"></div>
            </div>
            <div class="flex-1">
                <div v-for="(point, index) in config.points" :key="`poi-` + index" class="point-of-interest-container">
                    <PointOfInterestItem
                        class="point-of-interest"
                        :point="point"
                        :index="index"
                        @poi-changed="handlePoint"
                        @return-home="returnHome"
                    ></PointOfInterestItem>
                </div>
            </div>
        </div>

        <div class="h-full overlap-container align-middle w-full interactive-container sticky" v-else>
            <div class="interactive-content z-50 pointer-events-none">
                <div v-for="(point, index) in config.points" :key="`poi-` + index" class="point-of-interest-container">
                    <PointOfInterestItem
                        :point="point"
                        :index="index"
                        @poi-changed="handlePoint"
                        @return-home="returnHome"
                    ></PointOfInterestItem>
                </div>
            </div>
            <div :id="`ramp-map-${slideIdx}`" class="bg-gray-200 h-story rv-map sticky interactive-content"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ConfigFileStructure, InteractiveMapPanel, PointOfInterest } from '@storylines/definitions';
import { onMounted, ref } from 'vue';
import { createInstance } from 'ramp-pcar';
import PointOfInterestItem from './helpers/point-of-interest-item.vue';

const props = defineProps({
    config: {
        type: Object as PropType<InteractiveMapPanel>,
        required: true
    },
    slideIdx: {
        type: Number
    },
    lang: {
        type: String
    },
    configFileStructure: {
        type: Object as PropType<ConfigFileStructure>
    }
});

/* Component refs */
const el = ref();
const mapComponent = ref<Element | undefined>(undefined);

const rInstance = ref();

onMounted(() => {
    // Check if the config file exists in the ZIP folder first
    const assetSrc = `${props.config.config.substring(props.config.config.indexOf('/') + 1)}`;
    if (props.configFileStructure) {
        const mapFile = props.configFileStructure.zip.file(assetSrc);
        if (mapFile) {
            mapFile.async('string').then((res: string) => {
                props.config.config = res;
            });
        }
    }

    init();
});

const init = async () => {
    // Find the map component.
    mapComponent.value = props.config.teleportAOI
        ? el.value.children[0].children[0].children[0]
        : el.value.children[0].children[1];

    // parse JSON data
    const data = await fetch(props.config.config);

    if (data === undefined) {
        console.error('An error occurred while fetching the map configuration.');
    }

    const rampConfig = await data.json();

    rInstance.value = createInstance(mapComponent.value as HTMLElement, rampConfig);
    const mapInstance = rInstance.value;

    // Remove the appbar on load if it exists.
    mapInstance.event.on('map/created', () => {
        if (mapInstance.fixture.get('appbar')) {
            mapInstance.fixture.remove('appbar');
        }
    });

    // Set icons for the points of interest.
    await mapInstance.geo.map.viewPromise;

    props.config.points.forEach(async (point: PointOfInterest) => {
        const target = point.target;

        // Ignore "return home" points, as the map should already be showing the default
        // extent on map initialization.
        if (target.returnHome !== undefined) return;

        const layer = mapInstance.geo.layer.getLayer(target.layerId);

        await layer.loadPromise();

        if (target.layerIndex !== undefined) {
            // Layer is a map image layer.
            const subLayer = layer.getSublayer(target.layerIndex);
            await subLayer.loadPromise();
            subLayer.getIcon(target.oid).then((icon: string) => {
                point.target.icon = icon;
            });
        } else {
            layer.getIcon(target.oid).then((icon: string) => {
                point.target.icon = icon;
            });
        }
    });
};

const handlePoint = (
    attribs: { layerId: string; oid: number; layerIndex?: number; scale?: number },
    layersToHide?: string[]
) => {
    const { layerId: id, oid, layerIndex, scale } = attribs;
    if (!id || !oid) return;

    rInstance.value.geo.map.viewPromise.then(() => {
        const instance = rInstance.value;

        // toggle off visibility for all specified layers
        instance.geo.layer.allActiveLayers().forEach((layer: any) => {
            layer.visibility = !(layersToHide && layersToHide.includes(layer.id));
        });

        const hl = instance.fixture.get('hilight');
        const layer = instance.geo.layer.getLayer(id);

        if (layer.layerType === 'esri-map-image' && layerIndex === undefined) {
            console.warn(`Layer ${id} is a map image layer and requires that layerIndex is specified in the config.`);
            return;
        }

        const targetLayer = layerIndex !== undefined ? layer.getSublayer(layerIndex) : layer;

        // Once the layer has loaded, zoom into the point.
        targetLayer.loadPromise().then(async () => {
            // Remove old highlights.
            await hl?.removeHilight();

            // Add the new highlight in.
            const g = await targetLayer.getGraphic(oid, { getGeom: true, getStyle: true });
            await instance.geo.map.zoomMapTo(
                g.geometry,
                scale || 4622324.434309,
                true,
                props.config.duration || undefined
            );
            await hl?.addHilight(g);
        });
    });
};

const returnHome = async (layersToHide?: string[]) => {
    // toggle off visibility for all specified layers
    rInstance.value.geo.layer.allActiveLayers().forEach((layer: any) => {
        layer.visibility = !(layersToHide && layersToHide.includes(layer.id));
    });

    // zoom out to home extent=
    const extentSet = rInstance.value.geo.map.getExtentSet();
    await rInstance.value.geo.map.zoomMapTo(extentSet.fullExtent, null, true, props.config.duration || undefined);
};
</script>

<style lang="scss" scoped>
.rv-map {
    width: 100%;

    :deep(.time-slider-container) {
        bottom: 53px;
        right: 60px;
        left: auto;
        top: auto;
        width: 55%;
        padding: 5px;
        height: 110px;
        position: absolute;
        z-index: 5;
    }
    :deep(.time-slider-container.minimized) {
        height: 50px;
    }

    :deep(.sg) {
        background-color: transparent;
    }
    :deep(.sg-label) {
        background-color: #333;
        top: 10% !important;
        width: fit-content;
        margin: 0 auto;
        padding: 5px;
    }
}

.overlap-container {
    /* when the POIs overlay the map, have the panels appear to the right */
    :deep(.panel-stack) {
        width: 75%;
        justify-self: right;
    }

    .interactive-container {
        width: 25vw;
    }
}

.toc-horizontal {
    .rv-map {
        height: calc(100vh - 4rem - 2.75rem) !important; // 4rem for the header, 2.75 for the horizontal ToC.
    }
    .interactive-container {
        grid-template-columns: repeat(1, calc(100%));
    }
}
.toc-vertical {
    .rv-map {
        height: calc(100vh - 4rem) !important;
    }
    .interactive-container {
        grid-template-columns: repeat(1, calc(100% - 5px));
    }
}

.interactive-container {
    display: grid;
    grid-template-areas: 'interactiveOverlay';
}
.interactive-content {
    grid-area: interactiveOverlay;
}

.point-of-interest-container {
    margin: 30vh 20px;
    position: relative;
}

@media screen and (max-width: 640px) {
    .interactive-container {
        grid-template-columns: repeat(1, calc(100%)) !important;
    }
    .toc-horizontal {
        .rv-map {
            height: calc(100vh - 4rem) !important;
        }
    }
    .teleport-container {
        .rv-map {
            max-height: 50vh;
        }
        .point-of-interest {
            width: 100%;
        }
    }

    /* when the POIs overlay the map, have the panels appear to the right */
    .overlap-container {
        :deep(.panel-stack) {
            width: 60%;
            justify-self: right;
        }
    }
}

:deep(rv-basemap-item .rv-basemap-thumb img) {
    max-width: none;
}
:deep(.rv-details-attrib-value a) {
    white-space: unset !important;
}

$font-list:
    'Montserrat',
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji;
:deep(.ramp-app) {
    height: 100%;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        font-family: $font-list;
        line-height: 1.5;
    }

    input[type='checkbox'] {
        margin-top: unset;
    }
}
</style>
