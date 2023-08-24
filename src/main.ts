import { createApp } from 'vue';
import App from './app.vue';

import './router/componentHooks';
import router from './router';
import './style.css';
import { i18n } from './lang';

import VueTippy from 'vue-tippy';
import HighchartsVue from 'highcharts-vue';
import VuePapaParse from 'vue-papa-parse';
import VueFullscreen from 'vue-fullscreen';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const app = createApp(App);

app.use(router)
    .use(i18n)
    .use(HighchartsVue)
    .use(VueTippy, {
        directive: 'tippy',
        component: 'tippy',
        animation: 'scale'
    })
    .use(VuePapaParse)
    .use(VueFullscreen);

app.mount('#app');
