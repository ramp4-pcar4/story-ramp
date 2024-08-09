<template>
    <scrollama class="flex-1 prose max-w-none my-5">
        <div class="block py-20 align-middle text-center h-full" style="margin: 0 auto">
            <VueSpinnerOval size="120px" color="#009cd1" style="margin: 0 auto"></VueSpinnerOval>
        </div>
    </scrollama>
</template>

<script setup lang="ts">
import { VueSpinnerOval } from 'vue3-spinners';
import Scrollama from './helpers/scrollama.vue';
</script>

<style scoped lang="scss"></style>
