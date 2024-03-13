<template>
    <div class="navbar sticky">
        <ul>
            <li v-if="introExists">
                <a
                    class="items-center px-2 py-1 mx-1 cursor-pointer"
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
                    <span class="flex-1 ml-4 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap">{{
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
            <li v-for="(slide, idx) in slides" :key="idx" :class="{ 'is-active': activeChapterIndex === idx }">
                <!-- using router-link causes a page refresh which breaks plugin -->
                <a
                    class="flex items-center px-2 py-1 mx-1 cursor-pointer"
                    @click="scrollToChapter(`${idx}-${slide.title.toLowerCase().replaceAll(' ', '-')}`)"
                    v-tippy="{
                        delay: '200',
                        placement: 'right',
                        content: slide.title,
                        animateFill: true,
                        animation: 'chapter-menu'
                    }"
                    v-if="plugin"
                >
                    <span class="flex-1 ml-4 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap">{{
                        slide.title
                    }}</span>
                </a>

                <router-link
                    :to="{ hash: `#${idx}-${slide.title.toLowerCase().replaceAll(' ', '-')}` }"
                    @click="scrollToChapter(`${idx}-${slide.title.toLowerCase().replaceAll(' ', '-')}`)"
                    class="flex items-center px-2 py-1 mx-1"
                    target
                    v-tippy="{
                        delay: '200',
                        placement: 'right',
                        content: slide.title,
                        animateFill: true,
                        animation: 'chapter-menu'
                    }"
                    v-else
                >
                    <span class="flex-1 overflow-hidden leading-normal overflow-ellipsis whitespace-nowrap">{{
                        slide.title
                    }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ref, onMounted } from 'vue';
import { Slide } from '@storylines/definitions';

defineProps({
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
        type: Boolean
    }
});

const introExists = ref(false);

onMounted(() => {
    const introSection = document.getElementById('intro');
    introExists.value = !!introSection;
});

const scrollToChapter = (id: string): void => {
    const el = document.getElementById(id);
    const toc = document.querySelector('.navbar');
    if (el && toc) {
        const topOffset = toc.clientHeight;
        el.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            window.scrollBy(0, -topOffset);
        }, 600);
    }
};
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #fff;
    border-bottom: 2px;
    border-color: rgba(229, 231, 235, var(--tw-border-opacity));
    position: sticky;
    height: 100%;
    width: 100%;
    margin: 0;
}
.navbar ul {
    list-style-type: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    padding: 5px;
    margin: auto;
}
.navbar ul li {
    float: left;
    width: 12%;
    border-radius: 20px;
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
