import {select} from './helper'

export default() => {

    setTimeout(() => {
        const form = select('form');
        form.classList.add('hidden')
        select('body').classList.remove('form-overlay')
    }, 1);
}