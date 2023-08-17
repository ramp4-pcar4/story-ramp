import { VuePapaParse } from 'vue-papa-parse';
import { RouteLocationNormalized } from 'vue-router';

declare module 'vue/types/vue' {
    interface Vue {
        $papa: VuePapaParse;
        $route: RouteLocationNormalized;
    }
}
