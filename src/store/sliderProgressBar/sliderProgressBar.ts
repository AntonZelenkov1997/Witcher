import { makeAutoObservable } from 'mobx';

type sliderProgressBarTypes = {
    progress: number,
    GET_PROGRESS: number,
    SET_SLIDER_PROGRESS_BAR: (value: number) => void
}

const sliderProgressBar: sliderProgressBarTypes = makeAutoObservable({
    progress: 0,

    SET_SLIDER_PROGRESS_BAR(value) {
        this.progress = value
    },

    get GET_PROGRESS() {
        return this.progress
    },

})

export default sliderProgressBar