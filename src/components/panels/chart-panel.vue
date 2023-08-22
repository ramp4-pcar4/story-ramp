<template>
    <div class="flex">
        <div class="carousel-container self-center px-10 my-8 mx-auto bg-gray-200_" :style="{ width: `${width}px` }">
            <carousel v-if="width !== -1 && config.charts.length > 1" class="h-full" :wrap-around="config.loop">
                <slide
                    v-for="(chartConfig, index) in config.charts"
                    :key="`chart-${index}`"
                    :index="index"
                    class="self-center"
                >
                    <dqv-chart :config="chartConfig" :configFileStructure="configFileStructure" />
                </slide>

                <template #addons>
                    <navigation>
                        <template #next>
                            <svg class="icon icon-arrowRight" viewBox="0 0 24 24" width="24px" height="24px">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                            </svg>
                        </template>
                        <template #prev>
                            <svg class="icon icon-arrowLeft" viewBox="0 0 24 24" width="24px" height="24px">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                            </svg>
                        </template>
                    </navigation>
                    <pagination />
                </template>
            </carousel>

            <div v-else-if="width !== -1">
                <dqv-chart :config="config.charts[0]" :configFileStructure="configFileStructure" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Prop, Vue } from 'vue-property-decorator';
import { ChartPanel, ConfigFileStructure } from '@storylines/definitions';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import ChartV from '@storylines/components/panels/helpers/chart.vue';

@Options({
    components: {
        'dqv-chart': ChartV,
        Carousel,
        Slide,
        Navigation,
        Pagination
    }
})
export default class ChartPanelV extends Vue {
    @Prop() config!: ChartPanel;
    @Prop() configFileStructure!: ConfigFileStructure;

    width = -1;

    mounted(): void {
        setTimeout(() => {
            this.width = this.$el.clientWidth - 64;
        }, 100);
    }
}
</script>

<style lang="scss" scoped>
.carousel {
    height: auto;

    :deep(.carousel__prev > svg),
    :deep(.carousel__next > svg) {
        min-height: 0;
        min-width: 0;
        overflow: visible;
        padding-left: initial !important;
        border-radius: 100%;
        background: radial-gradient(white, transparent 75%);
    }

    // :deep(.carousel__next) {
    //     right: calc(-32px - 2em);
    // }

    // :deep(.carousel__prev) {
    //     left: calc(-32px - 2em);
    // }

    // TODO: fix these styles not being applied properly
    // :deep(.carousel__pagination-button) {
    //     border: 1px solid #878787;

    //     width: 24px;
    //     height: 6px;
    //     border-radius: 0px;

    //     &.carousel__pagination-button--active {
    //         border: none;
    //         background-color: var(--sr-accent-colour);
    //     }

    //     &:hover {
    //         background-color: white;
    //         // background-color: lighten(#00d2d3, 20%);
    //         border-color: var(--sr-accent-colour);
    //     }
    // }
}

@media screen and (max-width: 640px) {
    .carousel-container {
        max-width: 100vw;
        max-height: 50vh;
        background-color: white;
    }
}
</style>
