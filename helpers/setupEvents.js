import Routie from './routie'
import {selectAll, addEvent} from './helper'

export default () => {
    let recipes = selectAll('article');
    recipes.forEach(recipe => {
        addEvent(recipe, 'click', initDetailPage)
    })
    
    function initDetailPage () {
        // window.history.replaceState("object or string", "Title", `/recipe/${this.dataset.uri}`);
        Routie(`recipe/${this.dataset.uri}`)
    }
}