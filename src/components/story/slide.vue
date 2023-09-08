<template>
    <div :id="key" class="story-slide h-full flex sm:flex-row flex-col">
        <panel
            v-for="(panel, idx) in config.panel"
            :key="idx"
            :config="panel"
            :configFileStructure="configFileStructure"
            :index="idx"
            :ratio="defaultRatio"
            :slideIdx="slideIdx"
            :lang="lang"
        ></panel>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { getCurrentInstance, onMounted, ref } from 'vue';
import { ConfigFileStructure, PanelType, Slide } from '@storylines/definitions';
import Panel from '@storylines/components/panels/panel.vue';

const key = getCurrentInstance()?.vnode.key as string;

const props = defineProps({
    config: {
        type: Object as PropType<Slide>,
        required: true
    },
    configFileStructure: {
        type: Object as PropType<ConfigFileStructure>
    },
    slideIdx: {
        type: Number
    },
    lang: {
        type: String
    }
});

const defaultRatio = ref(false);

onMounted(() => {
    const panels = props.config.panel;
    // check if there is one text panel and one non-text panel in the slide and user did not specify a width in config
    if (panels.length == 2 && !panels[0]?.width && !panels[1]?.width) {
        const panelText1 = panels[0]?.type === PanelType.Text;
        const panelText2 = panels[1]?.type === PanelType.Text;

        // set a default ratio to be set so that non-text panel takes up more flexbox space
        if ((panelText1 && !panelText2) || (!panelText1 && panelText2)) {
            defaultRatio.value = true;
        }
    }
});
</script>

<style lang="scss" scoped></style>
