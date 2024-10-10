<template>
    <div id="h-navbar" class="navbar sticky">
        <ul>
            <li v-if="introExists && returnToTop">
                <a
                    class="flex items-center px-2 py-1 mx-1 cursor-pointer"
                    @click="scrollToChapter('intro')"
                    v-tippy="{
                        delay: '200',
                        placement: 'right',
                        content: $t('chapters.return'),
                        animateFill: true,
                        animation: 'chapter-menu'
                    }"
                    v-if="plugin"
                >
                    <span class="flex-1 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap">{{
                        $t('chapters.return')
                    }}</span>
                </a>

                <router-link
                    :to="{ hash: '#intro' }"
                    class="flex items-center px-2 py-1 mx-1"
                    target
                    v-tippy="{
                        delay: '200',
                        placement: 'right',
                        content: $t('chapters.return'),
                        animateFill: true,
                        animation: 'chapter-menu'
                    }"
                    v-else
                >
                    <span class="flex-1 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap">{{
                        $t('chapters.return')
                    }}</span>
                </router-link>
            </li>
            <li v-for="(slide, idx) in slides" :key="idx" :class="{ 'is-active': lastActiveIdx === slide.index }">
                <!-- using router-link causes a page refresh which breaks plugin -->
                <a
                    class="flex items-center px-2 py-1 mx-1 cursor-pointer"
                    @click="scrollToChapter(`${slide.index}-${slide.title.toLowerCase().replaceAll(' ', '-')}`)"
                    v-tippy="{
                        delay: '200',
                        placement: 'right',
                        content: getTitle(slide),
                        animateFill: true,
                        animation: 'chapter-menu'
                    }"
                    v-if="plugin"
                >
                    <span class="flex-1 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap">{{
                        getTitle(slide)
                    }}</span>
                </a>

                <router-link
                    :to="{ hash: `#${slide.index}-${slide.title.toLowerCase().replaceAll(' ', '-')}` }"
                    class="flex items-center px-2 py-1 mx-1"
                    target
                    v-tippy="{
                        delay: '200',
                        placement: 'right',
                        content: getTitle(slide),
                        animateFill: true,
                        animation: 'chapter-menu'
                    }"
                    v-else
                >
                    <span class="flex-1 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap">{{
                        getTitle(slide)
                    }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ref, watch, onMounted } from 'vue';
import { Slide } from '@storylines/definitions';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
    returnToTop: {
        type: Boolean,
        default: true
    },
    slides: {
        type: Array as PropType<Array<Slide>>,
        required: true
    },
    activeChapterIndex: {
        type: Number,
        required: true
    },
    lang: {
        type: String,
        required: true
    },
    plugin: {
        type: Boolean,
        default: false
    }
});

const introExists = ref(false);
const lastActiveIdx = ref(-1);

watch(
    () => props.activeChapterIndex,
    () => {
        updateActiveIdx();
    }
);

onMounted(() => {
    const introSection = document.getElementById('intro');
    introExists.value = !!introSection;
});

const scrollToChapter = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};

const getTitle = (slide: Slide): string => {
    return slide.title !== '' ? slide.title : t('chapters.untitled');
};

const updateActiveIdx = () => {
    const prevSlides = props.slides.filter((slide) => slide.index <= props.activeChapterIndex);
    lastActiveIdx.value = prevSlides.length ? prevSlides[prevSlides.length - 1].index : -1;
};
</script>

<style lang="scss" scoped>
.navbar {
    background-color: rgb(241, 242, 244);
    border-bottom: 2px;
    border-color: rgba(229, 231, 235, var(--tw-border-opacity));
    position: sticky;
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
}
.navbar ul {
    display: flex;
    list-style-type: none;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
    padding: 5px;
    margin: auto;
}
.navbar ul li {
    float: left;
    width: 12%;
    border-radius: 8px;
    a {
        text-overflow: ellipsis;
    }

    a:hover {
        text-decoration: none;
        color: inherit;
    }

    a:focus {
        text-decoration: none;
        color: inherit;
    }

    a:visited {
        color: inherit;
    }
    &.is-active {
        background-color: var(--sr-accent-colour);
        font-weight: bold;
    }
}
</style>
