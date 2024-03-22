<template>
    <div :id="key" class="story-slide h-full w-full flex sm:flex-row flex-col">
        <panel
            v-for="(panel, idx) in config.panel"
            :key="idx"
            :config="panel"
            :configFileStructure="configFileStructure"
            :index="idx"
            :ratio="defaultRatio"
            :slideIdx="slideIdx"
            :lang="lang"
            :class="determinePanelOrder(idx)"
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

/**
 * Determines the ordering and stickiness of the panels, and applies the required classes.
 * Ordering priority:
 *   - If there is only one panel ordering does not matter.
 *   - If there are two text panels, display them in order.
 *   - If there is a text panel and a multimedia panel, display them in order.
 *     On mobile, sticky and display the multimedia panel first.
 *   - If there are two multimedia panels, sticky the second panel on mobile.
 * @param {number} The panel index.
 * @returns {string} A list of classes to apply to the panel.
 */
const determinePanelOrder = (idx: number): string => {
    // No ordering needed if there's only a single panel.
    if (props.config.panel.length === 1) return '';

    const panel = props.config.panel[idx];
    const otherPanel = props.config.panel[1 - idx];

    // Both panels are not text panels, so display them in order, and sticky the right panel.
    if (panel.type != PanelType.Text && otherPanel.type != PanelType.Text) {
        return idx === 0 ? 'order-2 sm:order-1 sticky z-40' : 'order-1 sm:order-2 sticky z-41';
    } else {
        // One panel is a text panel and one panel is not. Sticky the non-text panel, and display it on top of the
        // text panel in mobile mode.
        if (panel.type === PanelType.Text) {
            return `order-2 sm:order-${idx + 1}`;
        } else {
            return `sticky order-1 sm:order-${idx + 1} z-40`;
        }
    }
};
</script>

<style lang="scss" scoped></style>
