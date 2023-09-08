<template>
    <div class="bg-gray-100 text-center inline-block h-full align-middle">
        <h1 class="align-middle">Temporary Audio Panel</h1>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { AudioPanel } from '@storylines/definitions';

defineProps({
    config: {
        type: Object as PropType<AudioPanel>
    }
});
</script>

<style lang="scss"></style>
