import { TimeSliderConfig } from '@storylines/definitions';
import TimeSlider from './time-slider.vue';
import { createApp, h } from 'vue';
import VueTippy from 'vue-tippy';

export class TimeSliderFixture {
    timeSliderPanel: HTMLElement | undefined;

    removed() {
        (this as any).$vApp.$el.querySelector('.inner-shell')?.removeChild(this.timeSliderPanel);
    }

    initTimeSlider(timeSliderConfig: TimeSliderConfig, i18n: any) {
        const iApi = (this as any).$iApi;
        this.timeSliderPanel = document.createElement('div');
        const timeSliderComponent = createApp(
            {
                setup(props) {
                    return () =>
                        h(TimeSlider as any, {
                            props: {
                                config: props.config,
                                rInstance: props.rInt
                            }
                        });
                }
            },
            { config: timeSliderConfig, rInstance: iApi }
        )
            .use(i18n)
            .use(VueTippy, {
                directive: 'tippy',
                component: 'tippy'
            });
        timeSliderComponent.mount(this.timeSliderPanel);
        this.timeSliderPanel.classList.add('time-slider-container');
        (this as any).$vApp.$el.querySelector('.inner-shell')?.appendChild(this.timeSliderPanel);
    }
}
