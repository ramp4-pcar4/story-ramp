import ChartV from './src/components/panels/helpers/chart.vue';
import StoryContentV from './src/components/story/story-content.vue';
import IntroV from './src/components/story/introduction.vue';

const StorylinesPlugin = {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    install(Vue) {
        Vue.component('dqv-chart', ChartV);
        Vue.component('story-content', StoryContentV);
        Vue.component('introduction', IntroV);
    }
};

export default StorylinesPlugin;
