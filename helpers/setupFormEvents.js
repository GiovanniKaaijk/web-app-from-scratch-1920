import {select} from './helper'
import {getData} from './localStorage'

export default () => {
    window.scrollTo(0,0)
    select('body').classList.add('form-overlay')
    select('.overlay').classList.remove('show')
    select('.search').classList.remove('hidden')
    if(checkFormInput() !== false) {
        select('form input').value = checkFormInput()
    }
}

function checkFormInput() {
    if(getData('recipeValue') !== false) {
        return getData('recipeValue')
    } else {
        return false
    }
}