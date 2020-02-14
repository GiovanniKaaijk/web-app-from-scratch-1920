import Routie from './routie'
import {selectAll, addEvent} from './helper'

export default () => {
    const recipes = selectAll('article');
    recipes.forEach(recipe => {
        addEvent(recipe, 'click', initDetailPage)
    })
    
    function initDetailPage () {
        Routie(`recipe/${this.dataset.uri}`)
    }

    const filterButtons = selectAll('button')
    filterButtons.forEach(button => {
        addEvent(button, 'click', filterRecipes)
    }) 

    function filterRecipes() {
        let calories = this.textContent
        if(calories !== 'reset') { calories = calories.split('-') }
        const articles = selectAll('article')
        articles.forEach(article => {
            if(calories === 'reset') {
                article.style.display = "block"
            }
            else if(article.dataset.calories >= calories[0] && article.dataset.calories <= calories[1]) {
                article.style.display = "block"
            } else {
                article.style.display = "none"
            }
        })
    }
}