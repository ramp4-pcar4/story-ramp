import { VuePapaParse } from 'vue-papa-parse';
import { RouteLocationNormalized } from 'vue-router';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $papa: VuePapaParse;
        $route: RouteLocationNormalized;
    }
}
