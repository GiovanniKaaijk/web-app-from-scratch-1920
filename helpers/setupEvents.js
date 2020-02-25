import Routie from './routie'
import {select, selectAll, addEvent} from './helper'

export default () => {
    const recipes = selectAll('article');
    recipes.forEach(recipe => {
        addEvent(recipe, 'click', initDetailPage)
    })
    
    function initDetailPage () {
        select('.overlay').classList.add('show')
        Routie(`recipe/${this.dataset.uri}`)
    }
}