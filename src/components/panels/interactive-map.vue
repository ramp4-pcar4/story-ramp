<template>
    <div ref="el" class="h-full align-middle w-full interactive-container sticky">
        <div class="interactive-content z-50">
            <div v-for="(point, index) in config.points" :key="`poi-` + index" class="point-of-interest-container">
                <PointOfInterestItem :point="point" :index="index" @poi-changed="handlePoint"></PointOfInterestItem>
            </div>
        </div>
        <div :id="`ramp-map-${slideIdx}`" class="bg-gray-200 h-story rv-map sticky top-16 interactive-content"></div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { onMounted, ref } from 'vue';
import { createInstance } from 'ramp-pcar';
import { ConfigFileStructure, InteractiveMapPanel, PointOfInterest } from '@storylines/definitions';
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
    mapComponent.value = el.value.children[1];

    fetch(props.config.config).then((data) => {
        // parse JSON data
        data.json().then((rampConfig: any) => {
            rInstance.value = createInstance(mapComponent.value as HTMLElement, rampConfig);
            const mapInstance = rInstance.value;

            // Remove the appbar on load if it exists.
            mapInstance.event.on('map/created', () => {
                if (mapInstance.fixture.get('appbar')) {
                    mapInstance.fixture.remove('appbar');
                }
            });

            // Set icons for the points of interest.
            mapInstance.geo.map.viewPromise.then(() => {
                props.config.points.forEach(async (point: PointOfInterest) => {
                    const target = point.target;

                    const layer = mapInstance.geo.layer.getLayer(target.layerId);
                    layer.loadPromise().then(() => {
                        if (target.layerIndex !== undefined) {
                            // Layer is a map image layer.
                            const subLayer = layer.getSublayer(target.layerIndex);
                            subLayer.loadPromise().then(() => {
                                subLayer.getIcon(target.oid).then((icon: string) => {
                                    point.target.icon = icon;
                                });
                            });
                        } else {
                            layer.getIcon(target.oid).then((icon: string) => {
                                point.target.icon = icon;
                            });
                        }
                    });
                });
            });
        });
    });
};

const handlePoint = (id: string, oid: number, layerIndex?: number) => {
    if (!id || !oid) return;

    rInstance.value.geo.map.viewPromise.then(() => {
        const instance = rInstance.value;
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
            await hl.removeHilight();

            // Add the new highlight in.
            const g = await targetLayer.getGraphic(oid, { getGeom: true, getStyle: true });
            await instance.geo.map.zoomMapTo(g.geometry, 4622324.434309);
            await hl.addHilight(g);
        });
    });
};
</script>

<style lang="scss" scoped>
.rv-map {
    height: calc(100vh - 4rem) !important;
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
}

.interactive-container {
    display: grid;
    grid-template-areas: 'interactiveOverlay';
    grid-template-columns: repeat(1, calc(calc(100vw - 4rem) - 2px));
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
        grid-template-columns: repeat(1, calc(100%));
    }
}

:deep(rv-basemap-item .rv-basemap-thumb img) {
    max-width: none;
}
:deep(.rv-details-attrib-value a) {
    white-space: unset !important;
}

$font-list: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji,
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
