import h from '../virtualDom/createElement';
import {select} from '../helpers/helper'

export default (data) => {
    
    const recipe = data.hits[0].recipe
    const ingredientArray = [];
    recipe.ingredientLines.map(ingredient => {
        ingredientArray.push(h('p', {
            attrs: {},
            children: [
                ingredient
            ]
        }))
    })
    select('.overlay').classList.remove('show')
    return h('div', {
        attrs: {
            class: 'container detail'
        },
        children: [
            h('div', {
                attrs: {
                    class: 'img-wrapper'
                },
                children: [
                    h('img', {
                        attrs: {
                            src: recipe.image
                        },
                        children: []
                    })
                ]
            }),
            h('div', {
                attrs: {
                    class: 'recipe-info'
                },
                children: [
                    h('h2', {
                        attrs: {},
                        children: [
                            recipe.label
                        ]
                    }),
                    h('div', {
                        attrs: {},
                        children: ingredientArray
                    }),
                    h('h2', {
                        attrs: {},
                        children: [
                            'Calories:'
                        ]
                    }),
                    h('p', {
                        attrs: {},
                        children: [
                            (Math.floor(recipe.calories)).toString()
                        ]
                    })
                ]
            })
        ]
    })
}

