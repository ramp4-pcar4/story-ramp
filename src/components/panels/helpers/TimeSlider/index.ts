import { TimeSliderConfig } from "@/definitions";
import { Vue } from 'vue-property-decorator';
import TimeSlider from "./time-slider.vue";

export class TimeSliderFixture {
    timeSliderPanel: HTMLElement | undefined;

    removed() {
        (this as any).$vApp.$el.querySelector('.inner-shell')?.removeChild(this.timeSliderPanel)
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
            this.timeSliderPanel.style.bottom = '48px';
            this.timeSliderPanel.style.right = '60px';
            this.timeSliderPanel.style.left = 'auto';
            this.timeSliderPanel.style.top = 'auto';
            this.timeSliderPanel.style.width = '55%';
            this.timeSliderPanel.style.padding = '5px;'
            this.timeSliderPanel.style.height = '110px';
            this.timeSliderPanel.style.position = 'absolute'
            this.timeSliderPanel.style.zIndex = '5';
            this.timeSliderPanel.classList.add('time-slider-container')
            this.timeSliderPanel.appendChild(timeSliderComponent.$el);
            (this as any).$vApp.$el.querySelector('.inner-shell')?.appendChild(this.timeSliderPanel)
    }
}