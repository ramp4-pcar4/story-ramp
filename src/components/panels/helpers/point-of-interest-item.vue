<template>
    <div ref="poi" class="relative point-of-interest-content pointer-events-auto">
        <!-- Point Icon -->
        <div class="flex">
            <span
                v-if="point.target.icon"
                class="absolute bg-white border-black border-2 point-of-interest-icon w-50 h-50 z-10"
                v-html="point.target.icon"
            ></span>
        </div>
        <div class="flex-1">
            <fullscreen :expandable="true" v-if="point.image">
                <img :src="point.image" :alt="point.altText" />
            </fullscreen>

            <div class="point-of-interest-text" :class="{ 'no-image': !point.image }" v-if="point.title || point.text">
                <h1 class="text-xl font-bold" v-html="point.title"></h1>
                <span class="prose" v-html="isMobile && expandable ? truncatedContent : mdContent"></span>
                <a class="show-more" @click="expandable = false" target="_self" v-if="isMobile && expandable">{{
                    $t('text.showMore')
                }}</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MarkdownIt from 'markdown-it';
import Fullscreen from './fullscreen.vue';

import type { PropType } from 'vue';
import type { PointOfInterest } from '@storylines/definitions';

const poi = ref();
const emit = defineEmits(['return-home', 'poi-changed']);

const md = new MarkdownIt({ html: true });
const mdContent = ref('');
const truncatedContent = ref('');
const threshold = ref(0.6);

const isMobile = ref(false);
const expandable = ref(false);

const props = defineProps({
    point: {
        type: Object as PropType<PointOfInterest>,
        required: true
    }
});

onMounted(() => {
    if (props.point.text) {
        mdContent.value = md
            .render(props.point.text)
            .replace(/<table/g, '<div class="table-container"><table')
            .replace(/<\/table>/g, '</table></div>');

        // check if the content exceeds the height limit (can adjust this threshold or make configurable)
        const MAX_LENGTH = 325;
        if (mdContent.value.length > MAX_LENGTH) {
            expandable.value = true;
            truncatedContent.value = mdContent.value.slice(0, MAX_LENGTH) + '...';
        } else {
            truncatedContent.value = mdContent.value;
        }
    }
    isMobile.value = window.innerWidth <= 640;

    if (!poi.value) {
        // TODO remove this if no one ever sees this message by Dec 2025
        console.error('point-of-interest-item: Bound element did not exist after mount');
        console.trace();
    }

    // Modify the threshold based on the height of the client window vs the height of the element. Re-observe the element afterwards.
    const resizeObserver = new ResizeObserver(function (e) {
        poiObserver.disconnect();

        isMobile.value = window.innerWidth <= 640;
        const clientHeight = window.innerHeight;
        const poiHeight = poi.value?.clientHeight;
        if (poiHeight > clientHeight * 0.6) {
            threshold.value = ((clientHeight * 0.6) / poiHeight) * 0.6;
        }

        poiObserver = new IntersectionObserver(intersectionHandler, {
            threshold: threshold.value
        });
        poiObserver.observe(poi.value as Element);
    });
    resizeObserver.observe(poi.value as Element);

    // Hook up the initial intersection observer.
    let poiObserver = new IntersectionObserver(intersectionHandler, {
        threshold: threshold.value
    });

    poiObserver.observe(poi.value as Element);
});

const intersectionHandler = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    // The observer fires immediately upon initialization. We don't want this, so skip the function.
    entries.forEach((point) => {
        if (point.intersectionRatio === 0) {
            return;
        }

        const hideLayers = props.point.hideLayers;
        const attribs = props.point.target;
        if (point.isIntersecting) {
            attribs.returnHome ? emit('return-home', hideLayers) : emit('poi-changed', attribs, hideLayers);
        }
    });
};
</script>

<style scoped>
.point-of-interest-content {
    width: 25vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.point-of-interest-text {
    padding: 15px 30px;
}

.no-image {
    padding-top: 30px;
}

.point-of-interest-icon {
    top: -16px;
    left: 11.5vw;
    margin: 0 auto;
    border-radius: 100%;
    left: 50%;
    transform: scale(1.25) translateX(-50%);
}

@media screen and (max-width: 640px) {
    .point-of-interest-content {
        width: 40vw;
    }

    .no-image {
        padding-top: 15px;
    }

    .show-more {
        color: #0078ff;
        cursor: pointer;
    }
}
</style>
