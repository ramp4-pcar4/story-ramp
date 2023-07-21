<template>
    <div class="flex flex-col h-full align-middle w-full">
        <div class="px-10 mb-0 chapter-title top-20 map-title text-center" v-if="config.title">
            {{ config.title }}
        </div>
        <div :id="`ramp-map-${slideIdx}`" class="w-full bg-gray-200 h-story rv-map"></div>
    </div>
</template>

<script lang="ts">
import { ConfigFileStructure, MapPanel } from '@storylines/definitions';
import { Component, Prop, Vue } from 'vue-property-decorator';

import TimeSlider from '@storylines/components/panels/helpers/time-slider.vue';
import Scrollguard from '@storylines/components/panels/helpers/scrollguard.vue';
import { TimeSliderFixture } from '@storylines/components/panels/helpers/time-slider/index';

@Component({
    components: {}
})
export default class MapPanelV extends Vue {
    @Prop() config!: MapPanel;
    @Prop() slideIdx!: number;
    @Prop() lang!: string;
    @Prop() configFileStructure!: ConfigFileStructure;

    intersectTimeoutHandle = -1;
    scrollguardOpen = false;
    mapComponent: Element | undefined = undefined;

    mounted(): void {
        // Check if the config file exists in the ZIP folder first
        const assetSrc = `${this.config.config.substring(this.config.config.indexOf('/') + 1)}`;
        if (this.configFileStructure) {
            const mapFile = this.configFileStructure.zip.file(assetSrc);
            if (mapFile) {
                mapFile.async('string').then((res: string) => {
                    this.config.config = res;
                });
            }
        }

        const observer = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    this.intersectTimeoutHandle = window.setTimeout(() => {
                        this.init();
                        observer.disconnect();
                    }, 350);
                } else {
                    clearTimeout(this.intersectTimeoutHandle);
                }
            },
            { threshold: [0] }
        );

        observer.observe(this.$el);
    }

    init(): void {
        // Find the correct map component based on whether there's a title component.
        this.mapComponent = this.config.title ? this.$el.children[1] : this.$el.children[0];
        // reduce build size by being as specific as possible with path
        /* const src = require('./../../../public/samples/' + this.config.config + '.js');
        const rInstance = src.initialize(this.mapComponent); */
        fetch(this.config.config).then((data) => {
            // parse JSON data
            data.json().then(
                (rampConfig: any) => {
                    const rInstance = (window as any).RAMP.createInstance(this.mapComponent, rampConfig);
                    // Add the scrollguard fixture and enable it if desired.
                    // If the scrollguard was already added previously, add does nothing, so no harm done!
                    if (this.config.scrollguard) {
                        rInstance.fixture.add('scrollguard').then((scrollguardFixture: any) => {
                            scrollguardFixture.setEnabled(true);
                        });
                    }
                    if (this.config.timeSlider) {
                        rInstance.fixture.add('time-slider', TimeSliderFixture).then((ts: TimeSliderFixture) => {
                            ts.initTimeSlider(this.config.timeSlider!, this.$i18n);
                        });
                    }
                },
                (err) => {
                    console.error(`Error fetching map config JSON file: ${err}`);
                }
            );
        });
    }
}
</script>

<style lang="scss" scoped>
.rv-map {
    height: calc(100vh - 4rem) !important;
    width: 100%;
    ::v-deep .time-slider-container {
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
    ::v-deep .time-slider-container.minimized {
        height: 50px;
    }
}

.rv-map-title {
    height: calc(100vh - 9rem) !important;
    width: 100%;
}

$font-list: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji;
::v-deep .ramp-app {
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

        ::v-deep .time-slider-container {
            left: 52px !important;
            right: 60px !important;
            bottom: 41px !important;
            width: auto !important;
            max-height: 90px;
        }

        ::v-deep .time-slider-container.minimized {
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

::v-deep rv-basemap-item .rv-basemap-thumb img {
    max-width: none;
}
::v-deep .rv-details-attrib-value a {
    white-space: unset !important;
}
</style>
