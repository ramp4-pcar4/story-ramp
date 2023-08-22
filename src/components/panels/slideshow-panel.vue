<template>
    <div v-if="config.images.length === 1">
        <image-panel
            :config="config.images[0]"
            :configFileStructure="configFileStructure"
            :key="config.images[0].src"
        ></image-panel>
    </div>
    <div class="flex" v-else>
        <div
            ref="images"
            class="carousel-container self-center px-10 my-8 mx-auto bg-gray-200_ h-28_"
            :style="{ width: `${width}px` }"
        >
            <full-screen :expandable="config.fullscreen" :type="config.type">
                <carousel ref="carousel" v-if="width !== -1" class="h-full bg-white" :wrap-around="config.loop">
                    <slide v-for="(image, index) in config.images" :key="index" :index="index" class="self-center">
                        <img
                            :data-src="image.src"
                            :src="slideIdx > 2 ? '' : image.src"
                            :alt="image.altText || ''"
                            :style="{ width: `${image.width}px`, height: `${image.height}px` }"
                            class="m-auto story-graphic carousel-image"
                        />
                        <div
                            v-if="image.caption"
                            class="text-center my-8 text-sm"
                            v-html="md.render(image.caption)"
                        ></div>
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
            </full-screen>

            <div v-if="config.caption" class="text-center mt-5 text-sm" v-html="md.render(config.caption)"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Prop, Vue } from 'vue-property-decorator';
import { ConfigFileStructure, SlideshowPanel } from '@storylines/definitions';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import MarkdownIt from 'markdown-it';
import FullscreenV from '@storylines/components/panels/helpers/fullscreen.vue';
import ImagePanelV from '@storylines/components/panels/image-panel.vue';

@Options({
    components: {
        Carousel,
        Slide,
        'full-screen': FullscreenV,
        Navigation,
        Pagination,
        'image-panel': ImagePanelV
    }
})
export default class SlideshowPanelV extends Vue {
    @Prop() config!: SlideshowPanel;
    @Prop() configFileStructure!: ConfigFileStructure;
    @Prop() slideIdx!: number;

    width = -1;

    md = new MarkdownIt({ html: true });

    observer: IntersectionObserver | undefined = undefined;

    mounted(): void {
        setTimeout(() => {
            this.width = this.$el.clientWidth;
        }, 100);

        if (this.slideIdx > 2) {
            this.observer = new IntersectionObserver(([image]) => {
                // lazy load images
                if (image.isIntersecting) {
                    (this.$refs.images as Element).querySelectorAll('.carousel-image').forEach((img) => {
                        img.setAttribute('src', img.getAttribute('data-src') as string);
                    });
                    this.$forceUpdate();
                    (this.observer as IntersectionObserver).disconnect();
                }
            });
        }

        // obtain image files from ZIP folder in editor preview mode
        if (this.configFileStructure) {
            this.config.images.forEach((image) => {
                const assetSrc = `${image.src.substring(image.src.indexOf('/') + 1)}`;
                const imageFile = this.configFileStructure.zip.file(assetSrc);
                if (imageFile) {
                    imageFile.async('blob').then((res: Blob) => {
                        image.src = URL.createObjectURL(res);
                        this.$forceUpdate();
                    });
                }
            });
        }

        if (this.config.images.length > 1) {
            this.observer?.observe(this.$refs.images as Element);
        }
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
        background-color: white;
    }
    .carousel-image {
        max-height: 48vh;
    }
}
</style>
