<template>
    <div class="flex flex-col h-full align-middle w-full">
        <div class="px-10 mb-0 chapter-title top-20 map-title text-center" v-if="config.title">
            {{ config.title }}
        </div>

        <div :id="`ramp-map-${slideIdx}`" class="w-full bg-gray-200 h-story rv-map"></div>
    </div>
</template>

<script lang="ts">
import { MapPanel } from '@/definitions';
import { Component, Vue, Prop } from 'vue-property-decorator';
// @ts-ignore
import { TimeSliderFixture } from '@/components/panels/helpers/TimeSlider/index';

@Component({
    components: {}
})
export default class MapPanelV extends Vue {
    @Prop() config!: MapPanel;
    @Prop() slideIdx!: number;
    @Prop() lang!: string;

    intersectTimeoutHandle = -1;
    scrollguardOpen = false;
    mapComponent: Element | undefined = undefined;

    mounted(): void {
        const observer = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    this.intersectTimeoutHandle = setTimeout(() => {
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
        const src = require('./../../../public/samples/' + this.config.config + '.js');

        const rInstance = src.initialize(this.mapComponent);

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

        // remove rv-focus-trap from map
        //     const mapInstance = document.getElementById(`ramp-map-${this.slideIdx}`);
        //     mapInstance?.removeAttribute('rv-trap-focus');
        // });
    }
}
</script>

<style lang="scss" scoped>
.rv-map {
    height: calc(100vh - 4rem) !important;
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
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333;
}

@media screen and (max-width: 640px) {
    .rv-map {
        max-height: 40vh;

        ::v-deep .time-slider-container {
            left: 52px !important;
            right: 60px !important;
            bottom: 36px !important;
            width: auto !important;
            height: 90px !important;
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
