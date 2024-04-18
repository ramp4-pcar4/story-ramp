<template>
    <div ref="el">
        <div class="flex">
            <div
                ref="slideshow"
                class="carousel-container self-center px-10 my-8 mx-auto bg-gray-200_"
                :style="{ width: `${width}px` }"
            >
                <carousel
                    ref="carousel"
                    v-if="width !== -1"
                    class="h-full bg-white"
                    :wrap-around="config.loop"
                    :mouseDrag="false"
                    :touchDrag="false"
                >
                    <slide v-for="(panelConfig, index) in config.items" :key="index" :index="index">
                        <panel
                            :config="panelConfig"
                            :configFileStructure="configFileStructure"
                            :slideIdx="slideIdx"
                            class="carousel-item"
                            :class="{ 'overflow-y-auto': panelConfig.type === 'text' }"
                        ></panel>
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

                <div
                    v-if="config.caption"
                    class="text-center mt-5 text-sm"
                    :class="{ 'has-background': background }"
                    v-html="md.render(config.caption)"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ref, onMounted } from 'vue';
import { ConfigFileStructure, SlideshowPanel } from '@storylines/definitions';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import MarkdownIt from 'markdown-it';
import Panel from '@storylines/components/panels/panel.vue';

const md = new MarkdownIt({ html: true });

defineProps({
    config: {
        type: Object as PropType<SlideshowPanel>,
        required: true
    },
    configFileStructure: {
        type: Object as PropType<ConfigFileStructure>
    },
    slideIdx: {
        type: Number,
        required: true
    },
    background: {
        type: Boolean
    }
});

const el = ref();
const width = ref(-1);

onMounted(() => {
    setTimeout(() => {
        width.value = el.value.clientWidth;
    }, 100);
});

window.addEventListener('resize', () => {
    width.value = el.value.clientWidth;
});
</script>

<style lang="scss" scoped>
.has-background {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0px 0px 20px 20px;
    color: black;
    margin-top: 0px !important;
    padding-top: 5px;
}

.carousel {
    height: auto;
    text-align: left;

    :deep(.carousel__prev > svg),
    :deep(.carousel__next > svg) {
        min-height: 0;
        min-width: 0;
        overflow: visible;
        padding-left: initial !important;
        border-radius: 100%;
        background: radial-gradient(white, transparent 75%);
    }

    :deep(.carousel__next) {
        right: calc(-4px - 1.5em);
    }

    :deep(.carousel__prev) {
        left: calc(-4px - 1.5em);
    }

    :deep(.carousel__pagination) {
        position: absolute;
        bottom: calc(-6px - 4em);
        left: 50%;
        transform: translate(-50%, 0);
    }

    /* Some slight modifications for existing styles */
    :deep(.rv-map) {
        height: calc(90vh - 5rem) !important;
    }
    :deep(.graphic-image) {
        padding: 0px;
    }

    :deep(.carousel__pagination-button) {
        border: 1px solid #878787;

        width: 24px;
        height: 6px;
        margin: 10px 2px;
        border-radius: 0px;
        padding: 0px;

        &.carousel__pagination-button--active {
            border: none;
            background-color: var(--sr-accent-colour);
        }

        &.carousel__pagination-button::after {
            display: none;
        }

        &:hover {
            background-color: white;
            // background-color: lighten(#00d2d3, 20%);
            border-color: var(--sr-accent-colour);
        }
    }
}
.carousel-item {
    height: 80vh;
}

@media screen and (max-width: 640px) {
    .carousel-container {
        max-width: 100vw;
        background-color: white;
    }
    .carousel-item {
        max-height: 48vh;
    }
    :deep(.fullscreenButton) {
        right: 0px;
    }
}
</style>
