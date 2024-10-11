<template>
    <div class="chart self-center mb-8 mx-auto bg-gray-200_">
        <chart :config="config" :configFileStructure="configFileStructure" />
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { ChartPanel, ConfigFileStructure } from '@storylines/definitions';
import Chart from '@storylines/components/panels/helpers/chart.vue';

defineProps({
    config: {
        type: Object as PropType<ChartPanel>,
        required: true
    },
    configFileStructure: {
        type: Object as PropType<ConfigFileStructure>
    }
});
</script>

<style lang="scss" scoped>
.chart {
    height: auto;
}

@media screen and (max-width: 640px) {
    .chart {
        max-width: 100vw;
        background-color: white;
    }
}
</style>
