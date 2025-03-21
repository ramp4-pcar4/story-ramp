<template>
    <div
        class="items-stretch"
        :class="$props.config?.tocOrientation === 'horizontal' ? 'toc-horizontal' : 'flex toc-vertical'"
    >
        <horizontal-menu
            class="top-menu"
            :active-chapter-index="activeChapterIndex"
            :return-to-top="config.returnTop ?? true"
            :slides="config.slides"
            :customToc="config.tableOfContents"
            :plugin="!!configFileStructure || !!plugin"
            :lang="lang"
            :style="{ top: headerHeight + 'px' }"
            v-if="$props.config?.tocOrientation === 'horizontal'"
        />
        <chapter-menu
            class="side-menu"
            :active-chapter-index="activeChapterIndex"
            :return-to-top="config.returnTop ?? true"
            :slides="config.slides"
            :customToc="config.tableOfContents"
            :plugin="!!configFileStructure || !!plugin"
            :lang="lang"
            v-else
        />

        <div class="grid-container z-20 story-scrollama w-full flex-grow min-w-0">
            <BackgroundImage
                :src="backgroundImage"
                :altText="backgroundImageAlt"
                :configFileStructure="configFileStructure"
                :cssClasses="backgroundCss"
                @background-changed="handleBackgroundChange"
            ></BackgroundImage>

            <scrollama class="grid-content z-20" @step-enter="stepEnter">
                <div
                    v-for="(slide, idx) in config.slides"
                    class="flex"
                    :key="idx"
                    :data-chapter-index="idx"
                    :id="`${idx}-${slide.title.toLowerCase().replaceAll(' ', '-')}`"
                    :name="`${idx}-${slide.title.toLowerCase().replaceAll(' ', '-')}`"
                >
                    <storylines-slide
                        :config="slide"
                        :configFileStructure="configFileStructure"
                        :class="addPanelPadding(idx)"
                        :slideIdx="idx"
                        :lang="lang"
                        :background="hasBackground"
                        :lazyLoad="config.lazyLoad ?? true"
                        @slide-changed="handleSlideChange"
                    ></storylines-slide>
                </div>
            </scrollama>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ConfigFileStructure, Slide, StoryRampConfig } from '@storylines/definitions';
import 'intersection-observer';

import ChapterMenu from './chapter-menu.vue';
import HorizontalMenu from './horizontal-menu.vue';
import BackgroundImage from './background-image.vue';
import StorylinesSlide from './slide.vue';
import Scrollama from '@storylines/components/panels/helpers/scrollama.vue';

const route = useRoute();
const emit = defineEmits(['step']);

const props = defineProps({
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
const backgroundImage = ref<string>('none');
const backgroundImageAlt = ref<string>('');
const hasBackground = ref<boolean>(false); // different from above; this considers animation time
const backgroundCss = ref<string>('');

onMounted(() => {
    const hash = route?.hash.substring(1);
    if (hash) {
        // Wait for a short period of time and then jump to the anchor.
        setTimeout(() => {
            const decodedHash = decodeURIComponent(hash);
            const el = document.getElementById(decodedHash);
            if (el) {
                // Calculate the offset of the header and horizontal ToC (if applicable).
                const offsetPosition =
                    el?.getBoundingClientRect().top -
                    (document.getElementById('h-navbar')?.clientHeight || 0) -
                    (document.getElementById('story-header')?.clientHeight || 0);
                window.scrollTo({ top: offsetPosition });
            }
        }, 200);
    }

    // See if the first slide has a background image applied. If so, set it early to it appears as soon
    // as you scroll down.
    handleSlideChange(0);
});

const handleSlideChange = (event: number): void => {
    const img = (props.config.slides[event] as Slide).backgroundImage;
    const altText = (props.config.slides[event] as Slide).backgroundAltText;
    backgroundImage.value = !!img ? img : 'none';
    backgroundImageAlt.value = !!altText ? altText : '';
    const cssClasses = (props.config.slides[event] as Slide).bgCssClasses;
    backgroundCss.value = cssClasses ? cssClasses : '';
};

/**
 * This event is fired when the background image actually switches backgrounds (after the animation).
 */
const handleBackgroundChange = (event: boolean): void => {
    hasBackground.value = event;
};

const stepEnter = ({ element }: { element: HTMLElement }): void => {
    activeChapterIndex.value = parseInt(element.dataset.chapterIndex || '-1');
    emit('step', activeChapterIndex.value);
    const horizontalNav = document.getElementById('h-navbar');
    if (horizontalNav) {
        horizontalNavHeight.value = horizontalNav.clientHeight * 0.75;
    }
};

// add top padding for a panel with bg image, on the condition that the previous panel did not have a bg image
const addPanelPadding = (idx: number): string => {
    if (
        idx > 0 &&
        !(props.config.slides[idx - 1] as Slide).backgroundImage &&
        (props.config.slides[idx] as Slide).backgroundImage
    ) {
        return 'pt-8';
    } else {
        return '';
    }
};
</script>

<style lang="scss" scoped>
.grid-container {
    display: grid;
    grid-template-areas: 'backgroundOverlay';
    grid-template-columns: repeat(1, calc(100%));
}
.grid-content {
    grid-area: backgroundOverlay;
}
.grid-background {
    grid-area: backgroundOverlay;
    background: var(--sr-content-background);

    border-style: solid none solid solid;
    border-width: 1px 0 1px 1px;

    // border-gray-200
    border-color: var(--sr-border-colour);
}

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
        box-shadow:
            -3px 0px 6px 0px rgba(0, 0, 0, 0.1),
            -2px 0 4px 0px rgba(0, 0, 0, 0.06);
    }

    // above
    > *:first-child::before {
        content: '';
        position: absolute;
        //width: 100%;
        height: 1px;
        top: 0;
        // modified tailwind shadow
        box-shadow:
            0 -3px 6px 0px rgba(0, 0, 0, 0.1),
            0 -2px 4px 0px rgba(0, 0, 0, 0.06);
    }

    // below
    > *:last-child::before {
        content: '';
        position: absolute;
        //width: 100%;
        height: 1px;
        bottom: 0;
        box-shadow:
            0 3px 6px 0px rgba(0, 0, 0, 0.1),
            0 2px 4px 0px rgba(0, 0, 0, 0.06);
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
