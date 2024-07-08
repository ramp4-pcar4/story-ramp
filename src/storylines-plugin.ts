import { i18n } from './lang';

import Chart from '@storylines/components/panels/helpers/chart.vue';
import Intro from '@storylines/components/story/introduction.vue';
import MobileMenu from '@storylines/components/story/mobile-menu.vue';
import StoryContent from '@storylines/components/story/story-content.vue';

const storylinesI18n = i18n;
export { storylinesI18n };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const install = (app: any) => {
    // reusable viewer components
    app.component('storylines-chart', Chart);
    app.component('storylines-intro', Intro);
    app.component('storylines-mobile-toc', MobileMenu);
    app.component('storylines-content', StoryContent);
};

export default { install };
