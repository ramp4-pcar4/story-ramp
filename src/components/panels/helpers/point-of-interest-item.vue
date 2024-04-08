<template>
    <div ref="poi" class="relative point-of-interest-content" :id="point.target?.layerId" :oid="point.target?.oid">
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
                <h1 class="text-xl font-bold">{{ point.title }}</h1>
                <span class="prose" v-html="mdContent"></span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { onMounted, ref } from 'vue';
import { PointOfInterest } from '@storylines/definitions';
import MarkdownIt from 'markdown-it';

import Fullscreen from './fullscreen.vue';

const poi = ref();
const emit = defineEmits(['poi-changed']);

const md = new MarkdownIt({ html: true });
const mdContent = ref('');

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
    }

    const poiObserver = new IntersectionObserver(
        ([point]) => {
            // The observer fires immediately upon initialization. We don't want this, so skip the function.
            if (point.intersectionRatio === 0) {
                return;
            }

            const p = point.target;
            const id = p.id;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const oid = p.attributes['oid'] ? p.attributes['oid'].value : undefined;

            if (point.isIntersecting) {
                emit('poi-changed', id, oid);
            }
        },
        { rootMargin: '0px', threshold: 0.45 }
    );

    // Hook up the observer.
    poiObserver.observe(poi.value);
});
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
}
</style>
