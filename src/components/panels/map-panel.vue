<template>
    <div class="flex flex-col h-full align-middle w-full">
        <div class="px-10 mb-0 chapter-title top-20 map-title text-center" v-if="config.title">
            {{ config.title }}
        </div>

        <div :id="`ramp-map-${slideIdx}`" class="w-full bg-gray-200 h-story"></div>
    </div>
</template>

<script lang="ts">
import { MapPanel } from '@/definitions';
import { Component, Vue, Prop } from 'vue-property-decorator';

import TimeSlider from '@/components/panels/helpers/time-slider.vue';
import Scrollguard from '@/components/panels/helpers/scrollguard.vue';

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
        this.init();
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

        // script.setAttribute('type', 'module');
        // script.setAttribute('src', src);
        // console.log(script);

        // this.mapComponent.appendChild(script);

        // new RAMP.Map(this.mapComponent, this.config.config);

        // RAMP.mapAdded.pipe().subscribe(async (mapi: any) => {
        //     if (this.config.scrollguard && mapi.id === this.mapComponent?.id) {
        //         const scrollguardPanel = mapi.panels.create('scrollguard');
        //         const scrollguardComponent = new Vue({
        //             render: (h) =>
        //                 h('scrollguard', {
        //                     props: {
        //                         lang: this.lang
        //                     }
        //                 }),
        //             components: {
        //                 scrollguard: Scrollguard
        //             },
        //             i18n: this.$i18n
        //         }).$mount();
        //         scrollguardPanel.body = scrollguardComponent.$el;
        //         scrollguardPanel.element.css({
        //             opacity: 0.45,
        //             zindex: 100,
        //             top: 0,
        //             left: 0,
        //             position: 'absolute'
        //         });

        //         (this.mapComponent as HTMLElement).addEventListener(
        //             'wheel',
        //             (event) => {
        //                 if (!event.ctrlKey) {
        //                     // This is not working in Firefox for some reason.
        //                     event.stopPropagation();

        //                     // If CTRL is not pressed, display the scrollguard.
        //                     scrollguardPanel.open();

        //                     // Only set the timeout if it's not already set, otherwise the panel will be glitchy.
        //                     if (!this.scrollguardOpen) {
        //                         window.setTimeout(() => {
        //                             scrollguardPanel.close();
        //                             this.scrollguardOpen = false;
        //                         }, 3000);
        //                     }

        //                     this.scrollguardOpen = true;
        //                 } else {
        //                     scrollguardPanel.close();
        //                     this.scrollguardOpen = false;
        //                 }
        //             },
        //             {
        //                 capture: true
        //             }
        //         );
        //     }

        //     if (this.config.timeSlider && mapi.id === this.mapComponent?.id) {
        //         const timeSliderPanel = mapi.panels.create('time-slider-container');
        //         const timeSliderComponent = new Vue({
        //             render: (h) =>
        //                 h('time-slider', {
        //                     props: {
        //                         config: this.config.timeSlider,
        //                         mapi
        //                     }
        //                 }),
        //             components: {
        //                 // eslint-disable-next-line vue/no-unused-components
        //                 'time-slider': TimeSlider
        //             },
        //             i18n: this.$i18n
        //         }).$mount();
        //         timeSliderPanel.body = timeSliderComponent.$el;
        //         timeSliderPanel.element.css({
        //             bottom: '73px',
        //             right: '60px',
        //             left: 'auto',
        //             top: 'auto',
        //             width: '50%',
        //             padding: '5px',
        //             'min-height': window.matchMedia('(max-width: 640px)').matches ? '90px' : '110px'
        //         });
        //         timeSliderPanel.open();
        //     }

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
            left: 0px !important;
            right: 38px !important;
            bottom: 29px !important;
            width: auto !important;
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
