import './router/componentHooks';
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import './style.css';

import { i18n } from './lang';

import VueTippy from 'vue-tippy';
import HighchartsVue from 'highcharts-vue';
import VuePapaParse from 'vue-papa-parse';
import VueProgressiveImage from 'vue-progressive-image';
import VueFullScreen from 'vue-fullscreen';

const app = createApp(App);

app.use(router)
    .use(i18n)
    .use(HighchartsVue)
    .use(VueTippy, {
        directive: 'tippy',
        component: 'tippy'
    })
    .use(VuePapaParse)
    .use(VueProgressiveImage)
    .use(VueFullScreen)
    .mount('#app');
