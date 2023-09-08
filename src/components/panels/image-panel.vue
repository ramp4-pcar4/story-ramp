<template>
    <div class="graphic self-start justify-center flex flex-col h-full align-middle py-5 w-full">
        <fullscreen :expandable="config.fullscreen" :type="config.type">
            <img
                ref="img"
                :src="slideIdx > 2 ? '' : config.src"
                :class="config.class"
                :alt="config.altText || ''"
                :style="{ width: `${config.width}px`, height: `${config.height}px` }"
                class="graphic-image px-10 mx-auto my-6 flex object-contain sm:max-w-screen sm:max-h-screen"
            />
        </fullscreen>

        <div
            v-if="config.caption"
            class="text-center text-sm max-w-full graphic-caption"
            v-html="md.render(config.caption)"
        ></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue';
import type { PropType } from 'vue';
import { ImagePanel } from '@storylines/definitions';

import MarkdownIt from 'markdown-it';
import Fullscreen from '@storylines/components/panels/helpers/fullscreen.vue';

const props = defineProps({
    config: {
        type: Object as PropType<ImagePanel>,
        required: true
    },
    slideIdx: {
        type: Number,
        default: 0
    }
});

const img = ref<Element>();
const md = new MarkdownIt({ html: true });

const observer = ref<IntersectionObserver | undefined>(undefined);

onMounted((): void => {
    if (props.slideIdx > 2) {
        observer.value = new IntersectionObserver(([image]) => {
            // lazy load images
            if (image.isIntersecting) {
                (img.value as Element).setAttribute('src', props.config.src);
                getCurrentInstance()?.proxy?.$forceUpdate();
                (observer.value as IntersectionObserver).disconnect();
            }
        });
    }
    observer.value?.observe(img.value as Element);
});
</script>

<style lang="scss">
@media screen and (max-width: 640px) {
    .graphic {
        max-width: 100vw;
        background-color: white;
    }
    .graphic-image {
        max-height: 38vh;
    }
}
</style>
