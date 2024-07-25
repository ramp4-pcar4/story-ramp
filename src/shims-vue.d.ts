declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module '*lang.csv' {
    import { LocaleMessages, VueMessageType } from 'vue-i18n';
    const content: LocaleMessages<VueMessageType>;
    export default content;
}

declare module 'highcharts-vue';
declare module 'vue3-scrollama';
declare module 'vue-tippy';
declare module 'vue-progressive-image';
declare module 'vue-fullscreen';
declare module 'vue-papa-parse';
