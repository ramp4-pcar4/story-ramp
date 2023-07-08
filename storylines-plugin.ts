import { i18n } from './src/lang';

import ChartV from '@storylines/components/panels/helpers/chart.vue';
import StoryContentV from '@storylines/components/story/story-content.vue';
import IntroV from '@storylines/components/story/introduction.vue';

const storylinesI18n = i18n;
export { ChartV, StoryContentV, IntroV, storylinesI18n };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const install = (Vue) => {
    // reusable viewer components
    Vue.component('storylines-intro', IntroV);
    Vue.component('storylines-chart', ChartV);
    Vue.component('storylines-content', StoryContentV);
};

export default { install };
