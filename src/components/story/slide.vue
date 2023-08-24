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

<script lang="ts">
import { getCurrentInstance } from 'vue';
import { Options, Prop, Vue } from 'vue-property-decorator';
import { ConfigFileStructure, PanelType, Slide } from '@storylines/definitions';
import PanelV from '@storylines/components/panels/panel.vue';

@Options({
    components: {
        panel: PanelV
    }
})
export default class SlideV extends Vue {
    @Prop() config!: Slide;
    @Prop() configFileStructure!: ConfigFileStructure;
    @Prop() slideIdx!: number;
    @Prop() lang!: string;

    defaultRatio = false;
    key = getCurrentInstance()?.vnode.key as string;

    mounted(): void {
        const panels = this.config.panel;
        // check if there is one text panel and one non-text panel in the slide and user did not specify a width in config
        if (panels.length == 2 && !panels[0]?.width && !panels[1]?.width) {
            const panelText1 = panels[0]?.type === PanelType.Text;
            const panelText2 = panels[1]?.type === PanelType.Text;

            // set a default ratio to be set so that non-text panel takes up more flexbox space
            if ((panelText1 && !panelText2) || (!panelText1 && panelText2)) {
                this.defaultRatio = true;
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
