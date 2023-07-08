import { i18n } from './src/lang';

import ChartV from '@storylines/components/panels/helpers/chart.vue';
import IntroV from '@storylines/components/story/introduction.vue';
import MobileMenuV from '@storylines/components/story/mobile-menu.vue';
import StoryContentV from '@storylines/components/story/story-content.vue';

const storylinesI18n = i18n;
export { storylinesI18n };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const install = (Vue) => {
    // reusable viewer components
    Vue.component('storylines-chart', ChartV);
    Vue.component('storylines-intro', IntroV);
    Vue.component('storylines-mobile-toc', MobileMenuV);
    Vue.component('storylines-content', StoryContentV);
};

export default { install };
