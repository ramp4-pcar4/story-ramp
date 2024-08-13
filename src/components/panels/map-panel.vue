<template>
    <div ref="el" class="flex flex-col h-full align-middle w-full">
        <div
            class="px-10 mb-0 chapter-title top-20 map-title text-center"
            :class="{ 'has-background': background }"
            v-if="config.title"
        >
            {{ config.title }}
        </div>
        <div :id="`ramp-map-${slideIdx}`" class="w-full bg-gray-200 h-story rv-map"></div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { onMounted, ref } from 'vue';
import { i18n } from '@storylines/lang';
import { createInstance } from 'ramp-pcar';
import { ConfigFileStructure, MapPanel, TimeSliderConfig } from '@storylines/definitions';
import { TimeSliderFixture } from '@storylines/components/panels/helpers/time-slider/index';

const props = defineProps({
    config: {
        type: Object as PropType<MapPanel>,
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
    },
    background: {
        type: Boolean
    }
});

const el = ref();
const intersectTimeoutHandle = ref(-1);
const mapComponent = ref<Element | undefined>(undefined);

onMounted(() => {
    const observer = new IntersectionObserver(
        ([e]) => {
            if (e.isIntersecting) {
                intersectTimeoutHandle.value = window.setTimeout(() => {
                    init();
                    observer.disconnect();
                    mapComponent.value?.querySelector('.map-loading')?.remove();
                }, 350);
            } else {
                clearTimeout(intersectTimeoutHandle.value);
            }
        },
        { threshold: [0] }
    );

    observer.observe(el.value);
});

const init = async () => {
    // Find the correct map component based on whether there's a title component.
    mapComponent.value = props.config.title ? el.value.children[1] : el.value.children[0];

    // If the configFileStructure object is provided (editor preview mode), grab the config from there.
    if (props.configFileStructure) {
        const assetSrc = `${props.config.config.substring(props.config.config.indexOf('/') + 1)}`;
        const mapFile = props.configFileStructure.zip.file(assetSrc);
        if (mapFile) {
            mapFile.async('string').then((res: string) => {
                setupMap(JSON.parse(res));
            });
        }
    } else {
        // Otherwise fetch it from the server.
        fetch(props.config.config).then((data) => {
            // parse JSON data
            data.json().then((rampConfig: any) => {
                setupMap(rampConfig);
            });
        });
    }
};

const setupMap = (config: any) => {
    const rInstance = createInstance(mapComponent.value as HTMLElement, config);

    // Add the scrollguard fixture and enable it if desired.
    // If the scrollguard was already added previously, add does nothing, so no harm done!
    if (props.config.scrollguard) {
        rInstance.fixture.add('scrollguard').then((scrollguardFixture: any) => {
            scrollguardFixture.setEnabled(true);
        });
    }

    if (props.config.timeSlider) {
        rInstance.fixture.add('time-slider', TimeSliderFixture).then((ts: TimeSliderFixture) => {
            ts.initTimeSlider(props.config.timeSlider as TimeSliderConfig, i18n);
        });
    }

    // Dispatch an event to indicate that the map has been loaded.
    const event = new CustomEvent('map-created', {
        detail: { rInstance: rInstance, customTemplates: props.config.customTemplates }
    });
    document.dispatchEvent(event);
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

.rv-map-title {
    height: calc(100vh - 9rem) !important;
    width: 100%;
}

.has-background {
    background-color: rgba(255, 255, 255, 0.6);
    margin-bottom: 0em !important;
    padding-bottom: 1em;
    color: black;
}

.map-title {
    color: #111827;
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 1em;
    margin-bottom: 1em;
    line-height: 1.3333333;
}

@media screen and (max-width: 640px) {
    .rv-map {
        max-height: 50vh;

        :deep(.time-slider-container) {
            left: 52px !important;
            right: 60px !important;
            bottom: 41px !important;
            width: auto !important;
            max-height: 90px;
        }

        :deep(.time-slider-container.minimized) {
            height: 32px;
        }
    }

    .map-title {
        margin: 0em;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        background: #fff;
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
