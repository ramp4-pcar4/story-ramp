<template>
    <div
        :class="
            config.type !== 'text'
                ? `sticky ${config.type === 'map' ? 'top-16' : 'top-8'} sm:self-start flex-2 order-1 sm:order-2 z-40`
                : 'flex order-2 sm:order-1'
        "
        class="flex-col relative"
    >
        <slot></slot>
        <component
            :is="getTemplate()"
            :config="config"
            :configFileStructure="configFileStructure"
            :slideIdx="slideIdx"
            :lang="lang"
            :style="config.customStyles"
        ></component>
    </div>
</template>

<script setup lang="ts">
import type { Component, PropType } from 'vue';
import { BasePanel, ConfigFileStructure, PanelType } from '@storylines/definitions';

import TextPanel from './text-panel.vue';
import MapPanel from './map-panel.vue';
import ImagePanel from './image-panel.vue';
import AudioPanel from './audio-panel.vue';
import VideoPanel from './video-panel.vue';
import SlideshowPanel from './slideshow-panel.vue';
import ChartPanel from './chart-panel.vue';
import DynamicPanel from './dynamic-panel.vue';
import LoadingPanel from './loading-panel.vue';

const props = defineProps({
    config: {
        type: Object as PropType<BasePanel>,
        required: true
    },
    configFileStructure: {
        type: Object as PropType<ConfigFileStructure>
    },
    ratio: {
        type: Boolean
    },
    slideIdx: {
        type: Number
    },
    lang: {
        type: String
    }
});

/**
 * Returns the corresponding component for this panel.
 */
const getTemplate = (): Component => {
    const panelTemplates: Record<PanelType | string, Component> = {
        [PanelType.Text]: TextPanel,
        [PanelType.Map]: MapPanel,
        [PanelType.Image]: ImagePanel,
        [PanelType.Audio]: AudioPanel,
        [PanelType.Video]: VideoPanel,
        [PanelType.Slideshow]: SlideshowPanel,
        [PanelType.Chart]: ChartPanel,
        [PanelType.Dynamic]: DynamicPanel,
        [PanelType.Loading]: LoadingPanel
    };

    return panelTemplates[props.config.type];
};
</script>

<style lang="scss" scoped></style>
