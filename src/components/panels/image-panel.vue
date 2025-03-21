<template>
    <div class="graphic self-start flex flex-col h-full align-middle pb-5 w-full">
        <fullscreen :expandable="config.fullscreen" :type="config.type">
            <img
                ref="img"
                :src="lazyLoad && slideIdx > 2 ? '' : state.src"
                :class="[config.class, config.caption ? 'rounded-t-lg' : 'rounded-lg']"
                :alt="config.altText || ''"
                :style="{ width: `${config.width}px`, height: `${config.height}px` }"
                class="graphic-image mx-auto flex object-contain sm:max-w-screen sm:max-h-screen"
            />
        </fullscreen>

        <div
            v-if="config.caption"
            class="text-center text-sm max-w-full graphic-caption"
            v-html="md.render(config.caption)"
            :class="{ 'has-background': background }"
        ></div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, getCurrentInstance } from 'vue';
import type { PropType } from 'vue';
import type { ImagePanel, ConfigFileStructure } from '@storylines/definitions';

import MarkdownIt from 'markdown-it';
import Fullscreen from '@storylines/components/panels/helpers/fullscreen.vue';

const props = defineProps({
    config: {
        type: Object as PropType<ImagePanel>,
        required: true
    },
    configFileStructure: {
        type: Object as PropType<ConfigFileStructure>
    },
    slideIdx: {
        type: Number,
        default: 0
    },
    background: {
        type: Boolean
    },
    lazyLoad: {
        type: Boolean
    }
});

const img = ref<Element>();
const md = new MarkdownIt({ html: true });
const state = reactive({
    src: ''
});

const observer = ref<IntersectionObserver | undefined>(undefined);

onMounted((): void => {
    state.src = props.config.src ? props.config.src : '';

    if (props.lazyLoad && props.slideIdx > 2) {
        observer.value = new IntersectionObserver(([image]) => {
            // lazy load images
            if (image.isIntersecting) {
                (img.value as Element).setAttribute('src', props.config.src);
                getCurrentInstance()?.proxy?.$forceUpdate();
                (observer.value as IntersectionObserver).disconnect();
            }
        });
    }

    // obtain image files from ZIP folder in editor preview mode
    if (props.configFileStructure) {
        const image = props.config;
        const assetSrc = `${image.src.substring(image.src.indexOf('/') + 1)}`;
        const imageFile = props.configFileStructure?.zip.file(assetSrc);
        const imageType = assetSrc.split('.').at(-1);
        const imageName = image.src.replace(/^.*[\\/]/, '');
        if (imageFile) {
            // Convert the image to a blob so it can be displayed locally.
            if (imageType !== 'svg') {
                imageFile.async('blob').then((res: Blob) => {
                    state.src = props.config.src = URL.createObjectURL(res);
                });
            } else {
                imageFile.async('text').then((res) => {
                    const image = new File([res], imageName, { type: 'image/svg+xml' });
                    state.src = props.config.src = URL.createObjectURL(image);
                });
            }
        }
    }

    observer.value?.observe(img.value as Element);
});
</script>

<style lang="scss" scoped>
.has-background {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0px 0px 8px 8px;
    color: black;
}
@media screen and (max-width: 640px) {
    .graphic {
        max-width: 100vw;
        max-height: 60vh;
        overflow-y: auto;
        background-color: white;

        box-shadow: 1px 2px 5px #ddd;
    }

    .graphic-image {
        max-height: 38vh;
    }
}
</style>
