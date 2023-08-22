<template>
    <VueScrollama class="flex-1 prose max-w-none my-5">
        <div class="block py-20 align-middle text-center h-full" style="margin: 0 auto">
            <!-- <spinner size="120px" background="#00D2D3" color="#009cd1" stroke="10px" style="margin: 0 auto"></spinner> -->
        </div>
    </VueScrollama>
</template>

<script lang="ts">
import VueScrollama from 'vue3-scrollama';
import { Options, Vue } from 'vue-property-decorator';
// import Circle2 from 'vue-loading-spinner/src/components/Circle2.vue';

@Options({
    components: {
        VueScrollama
        // spinner: Circle2
    }
})
export default class LoadingPanelV extends Vue {}
</script>

<style scoped lang="scss"></style>
