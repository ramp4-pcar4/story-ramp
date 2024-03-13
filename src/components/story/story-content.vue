<template>
    <div
        class="items-stretch"
        :class="{ flex: !$props.config?.tocOrientation || $props.config?.tocOrientation === 'vertical' }"
    >
        <horizontal-menu
            class="top-menu"
            :active-chapter-index="activeChapterIndex"
            :slides="config.slides"
            :plugin="!!configFileStructure || !!plugin"
            :lang="lang"
            :style="{ top: headerHeight + 'px' }"
            v-if="$props.config?.tocOrientation === 'horizontal'"
        />
        <chapter-menu
            class="side-menu"
            :active-chapter-index="activeChapterIndex"
            :slides="config.slides"
            :plugin="!!configFileStructure || !!plugin"
            :lang="lang"
            v-else
        />

        <VueScrollama class="relative story-scrollama w-full flex-grow min-w-0" @step-enter="stepEnter">
            <div
                v-for="(slide, idx) in config.slides"
                class="flex pt-24"
                :key="idx"
                :data-chapter-index="idx"
                :id="`${idx}-${slide.title.toLowerCase().replaceAll(' ', '-')}`"
                :name="`${idx}-${slide.title.toLowerCase().replaceAll(' ', '-')}`"
            >
                <slide
                    :config="slide"
                    :configFileStructure="configFileStructure"
                    :slideIdx="idx"
                    :lang="lang"
                    :style="{ 'margin-top': horizontalNavHeight + 'px' }"
                ></slide>
            </div>
        </VueScrollama>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import 'intersection-observer';
import VueScrollama from 'vue3-scrollama';
import { ConfigFileStructure, StoryRampConfig } from '@storylines/definitions';

import ChapterMenu from './chapter-menu.vue';
import HorizontalMenu from './horizontal-menu.vue';
import Slide from './slide.vue';

const route = useRoute();
const emit = defineEmits(['step']);

defineProps({
    config: {
        type: Object as PropType<StoryRampConfig>,
        required: true
    },
    configFileStructure: {
        type: Object as PropType<ConfigFileStructure>
    },
    lang: {
        type: String,
        required: true
    },
    plugin: {
        type: Boolean
    },
    headerHeight: {
        type: Number
    }
});

const activeChapterIndex = ref(-1);
const horizontalNavHeight = ref(0);

onMounted(() => {
    const hash = route?.hash.substring(1);
    if (hash) {
        // Wait for a short period of time and then jump to the anchor.
        setTimeout(() => {
            const decodedHash = decodeURIComponent(hash);
            const el = document.getElementById(decodedHash);
            el?.scrollIntoView();
        }, 200);
    }
});

const stepEnter = ({ element }: { element: HTMLElement }): void => {
    activeChapterIndex.value = parseInt(element.dataset.chapterIndex || '-1');
    emit('step', activeChapterIndex.value);
    const horizontalNav = document.getElementById('h-navbar');
    if (horizontalNav) {
        horizontalNavHeight.value = horizontalNav.clientHeight * 0.75;
    }
};
</script>

<style lang="scss" scoped>
.story-scrollama {
    background: var(--sr-content-background);
    // background: linear-gradient(to right, var(--sr-content-background) 33.3%, #fff 33.3%);
    // background: linear-gradient(to right, var(--sr-content-background) 40%, #fff 40%);

    border-style: solid none solid solid;
    border-width: 1px 0 1px 1px;

    // border-gray-200
    border-color: var(--sr-border-colour);

    // on the left
    &::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 1px;
        left: 0;
        // modified tailwind shadow
        box-shadow: -3px 0px 6px 0px rgba(0, 0, 0, 0.1), -2px 0 4px 0px rgba(0, 0, 0, 0.06);
    }

    // above
    > *:first-child::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        top: 0;
        // modified tailwind shadow
        box-shadow: 0 -3px 6px 0px rgba(0, 0, 0, 0.1), 0 -2px 4px 0px rgba(0, 0, 0, 0.06);
    }

    // below
    > *:last-child::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.1), 0 2px 4px 0px rgba(0, 0, 0, 0.06);
    }
}
.top-menu {
    z-index: 50;
    width: 100%;
}
@media screen and (max-width: 640px) {
    .side-menu {
        display: none;
    }
    .top-menu {
        display: none;
    }
}
</style>
