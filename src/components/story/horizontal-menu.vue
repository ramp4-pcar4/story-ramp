<template>
    <div id="h-navbar" class="navbar h-11 sticky">
        <ul>
            <li v-if="introExists && returnToTop">
                <a
                    class="flex items-center px-2 py-1 mx-1 cursor-pointer"
                    @click="scrollToChapter('intro')"
                    v-tippy="{
                        delay: '200',
                        placement: 'bottom',
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
                        placement: 'bottom',
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

            <!-- Build custom configured table of contents -->
            <template v-if="customToc">
                <li
                    v-for="(item, idx) in customToc"
                    :key="idx"
                    :class="{
                        'is-active': lastActiveIdx === item.slideIndex
                    }"
                    @mouseenter="showSublist(idx)"
                    @mouseleave="hideSublist(idx)"
                >
                    <!-- using router-link causes a page refresh which breaks plugin -->
                    <a
                        class="flex items-center px-2 py-4 cursor-pointer"
                        @click="scrollToChapter(getSlideId(item.slideIndex))"
                        @focus="showSublist(idx)"
                        @blur="hideSublist(idx)"
                        v-tippy="{
                            delay: '200',
                            placement: 'right',
                            content: getTitle(item),
                            animateFill: true,
                            animation: 'chapter-menu'
                        }"
                        v-if="plugin"
                    >
                        <span class="flex-1 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap">{{
                            getTitle(item)
                        }}</span>
                    </a>

                    <router-link
                        :to="{ hash: `#${getSlideId(item.slideIndex)}` }"
                        @focus="showSublist(idx)"
                        @blur="hideSublist(idx)"
                        class="flex items-center px-2 py-1 pb-2"
                        target
                        v-tippy="{
                            delay: '200',
                            placement: 'right',
                            content: getTitle(item),
                            animateFill: true,
                            animation: 'chapter-menu'
                        }"
                        v-else
                    >
                        <span class="flex-1 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap">{{
                            getTitle(item)
                        }}</span>
                    </router-link>

                    <!-- Dropdown for sublists -->
                    <ul v-show="isSublistToggled(idx)" class="dropdown-menu">
                        <li
                            v-for="(subItem, subIdx) in item.sublist"
                            :key="subIdx"
                            :class="[
                                {
                                    'border-t-2': subIdx === 0,
                                    'is-active': lastActiveIdx === subItem.slideIndex
                                }
                            ]"
                            class="border-b-2 border-gray-300"
                        >
                            <a
                                class="flex items-center px-2 py-1 mx-1"
                                @click="scrollToChapter(getSlideId(subItem.slideIndex))"
                                v-tippy="{
                                    delay: '200',
                                    placement: 'right',
                                    content: subItem.title,
                                    animateFill: true,
                                    animation: 'chapter-menu'
                                }"
                                v-if="plugin"
                            >
                                <span
                                    class="flex-1 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap"
                                    >{{ subItem.title }}</span
                                >
                            </a>

                            <router-link
                                :to="{ hash: `#${getSlideId(subItem.slideIndex)}` }"
                                class="flex items-center px-2 py-1 mx-1"
                                target
                                v-tippy="{
                                    delay: '200',
                                    placement: 'right',
                                    content: subItem.title,
                                    animateFill: true,
                                    animation: 'chapter-menu'
                                }"
                                v-else
                            >
                                <span
                                    class="flex-1 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap"
                                    >{{ subItem.title }}</span
                                >
                            </router-link>
                        </li>
                    </ul>
                </li>
            </template>

            <!-- Default table of contents -->
            <template v-else>
                <li
                    v-for="(slide, idx) in tocSlides"
                    :key="idx"
                    :class="{
                        'is-active': lastActiveIdx === slide.index,
                        separator: (!returnToTop && idx !== 0) || returnToTop
                    }"
                >
                    <!-- using router-link causes a page refresh which breaks plugin -->
                    <a
                        class="flex items-center px-2 py-1 mx-1 cursor-pointer"
                        @click="scrollToChapter(`${slide.index}-${slide.title.toLowerCase().replaceAll(' ', '-')}`)"
                        v-tippy="{
                            delay: '200',
                            placement: 'bottom',
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
                            placement: 'bottom',
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
            </template>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { computed, ref, watch, onMounted } from 'vue';
import { MenuItem, Slide } from '@storylines/definitions';

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
    customToc: {
        type: Array as PropType<Array<MenuItem>>,
        required: false
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

const sublistToggled = ref({} as Record<number, boolean>);

// filter out which slides are visible in the table of contents while preserving original slide index
const tocSlides = computed(() => {
    const slides = props.slides.map((slide, idx) => ({ ...slide, index: idx }));
    if (!props.customToc) {
        slides.filter((slide) => slide.includeInToc !== false);
    }
    return slides;
});

watch(
    () => props.activeChapterIndex,
    () => {
        updateActiveIdx();
    }
);

onMounted(() => {
    const introSection = document.getElementById('intro');
    introExists.value = !!introSection;

    if (props.customToc) {
        props.customToc.forEach((item, idx) => {
            sublistToggled.value[idx] = false;
        });
    }
});

const scrollToChapter = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};

const getTitle = (slide: Slide | MenuItem): string => {
    return slide.title !== '' ? slide.title : t('chapters.untitled');
};

const getSlideId = (slideIdx: number): string => {
    const slide = props.slides.find((slide, idx) => idx === slideIdx);
    return slide ? `${slideIdx}-${slide.title.toLowerCase().replaceAll(' ', '-')}` : '';
};

const showSublist = (index: number): void => {
    sublistToggled.value[index] = true;
};

const hideSublist = (index: number): void => {
    sublistToggled.value[index] = false;
};

const isSublistToggled = (index: number): boolean => {
    return sublistToggled.value[index];
};

const updateActiveIdx = () => {
    const prevSlides = tocSlides.value.filter((slide) => slide.index <= props.activeChapterIndex);
    lastActiveIdx.value = prevSlides.length ? prevSlides[prevSlides.length - 1].index : -1;
};
</script>

<style lang="scss" scoped>
.navbar {
    background-color: rgb(241, 242, 244);
    border-bottom: 2px;
    border-color: rgba(229, 231, 235, var(--tw-border-opacity));
    position: sticky;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
}

.navbar > ul {
    display: flex;
    list-style-type: none;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 5px;
    margin: auto;
}

.navbar > ul > li {
    float: left;
    width: 12%;
    border-radius: 8px;
    position: relative;
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

.separator {
    position: relative;
}

.separator::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    width: 1px;
    background-color: #e0e0e0;
}

.dropdown-menu {
    position: absolute;
    width: 100%;
    background-color: rgb(241, 242, 244);
    box-sizing: border-box;

    > li {
        background-color: rgb(241, 242, 244);
        font-weight: normal;

        &.is-active {
            background-color: var(--sr-accent-colour);
            font-weight: bold;
        }
    }
}
</style>
