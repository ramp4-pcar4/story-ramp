<template>
    <VueScrollama class="flex-1 prose max-w-none my-5">
        <div class="block py-20 align-middle text-center h-full" style="margin: 0 auto">
            <spinner size="120px" color="#009cd1" style="margin: 0 auto"></spinner>
        </div>
    </VueScrollama>
</template>

<script lang="ts">
import VueScrollama from 'vue3-scrollama';
import { Options, Vue } from 'vue-property-decorator';
import { VueSpinnerOval } from 'vue3-spinners';

@Options({
    components: {
        VueScrollama,
        spinner: VueSpinnerOval
    }
})
export default class LoadingPanelV extends Vue {}
</script>

<style scoped lang="scss"></style>
