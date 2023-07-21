import { TimeSliderConfig } from '@storylines/definitions';
import { Vue } from 'vue-property-decorator';
import TimeSlider from './time-slider.vue';

export class TimeSliderFixture {
    timeSliderPanel: HTMLElement | undefined;

    removed() {
        (this as any).$vApp.$el.querySelector('.inner-shell')?.removeChild(this.timeSliderPanel);
    }

    initTimeSlider(config: TimeSliderConfig, i18n: any) {
        this.timeSliderPanel = document.createElement('div');
        const timeSliderComponent = new Vue({
            render: (h) =>
                h('time-slider', {
                    props: {
                        config: config,
                        rInstance: (this as any).$iApi
                    }
                }),
            components: {
                // eslint-disable-next-line vue/no-unused-components
                'time-slider': TimeSlider
            },
            i18n: i18n
        }).$mount();
        this.timeSliderPanel.classList.add('time-slider-container');
        this.timeSliderPanel.appendChild(timeSliderComponent.$el);
        (this as any).$vApp.$el.querySelector('.inner-shell')?.appendChild(this.timeSliderPanel);
    }
}
