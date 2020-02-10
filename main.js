// Created the vitual dom with the following documentation
// https://dev.to/ycmjason/building-a-simple-virtual-dom-from-scratch-3d05#diff-oldvtree-newvtree
// Made by: https://github.com/ycmjason

import h from './virtualDom/createElement'
import render from './virtualDom/render'
import mount from './virtualDom/mount'
import diff from './virtualDom/diffChecker'

import formApp from './components/formOverlay'
import header from './components/header'
import createDetailPage from './components/detailPage'

import {select, selectAll,selectName, addEvent} from './helpers/helper'
import {fetcher} from './helpers/fetch'

const api = 'https://api.edamam.com/search'
const appId = '&app_id=f8bd8b97'
const appKey = '&app_key=db1e2d22f0a7e8cedde770beac059cba'

let vApp;
//gets changed later on
let vNewApp = h('div', {
    attrs: {
        class: 'app'
    },
    children: []
})

let overlay,
    form,
    rootEl;

const renderRecipe = (result) => {
    const newChildren = [];
    result.hits.map(result => {
        
        newChildren.push(h('article', {
            attrs: {
                class: 'object-wrapper',
                "data-uri": result.recipe.uri
            },
            children: [
                h('div', {
                    attrs: {
                        class: 'img-wrapper'
                    },
                    children: [
                        h('img', {
                            attrs: {
                                src: result.recipe.image
                            }
                        })
                    ]
                    }),
                    h('h2', {
                        attrs: {
                            class: 'title'
                        },
                        children: [
                            result.recipe.label,
                        ]
                    }),
                ],
        }))
    })
    
    vNewApp = h('div', {
        attrs: {
          id: 'app',
          class: 'container'
        },
        children: [h('main', {
            attrs: {
                class: ''
            },
            children: newChildren
        })]
      });

    
    form.classList.add('fade')

    setTimeout(() => {
        form.classList.remove('fade')
        form.classList.add('hidden')
    }, 300);
    setTimeout(() => {
        setupDetailEvents()
    }, 100);
}

let setupDetailEvents = async () => {
    let recipes = selectAll('article');
    console.log(recipes)
    recipes.forEach(recipe => {
        addEvent(recipe, 'click', initDetailPage)
    })
}

async function initDetailPage () {
    const dataUri = this.dataset.uri
    let r = dataUri.split('recipe_')
    r = `?q=${r[1]}`
    const detailQuery = api + r + appId + appKey
    console.log(detailQuery)
    const data = await fetcher(detailQuery)
    vNewApp = createDetailPage(data)
}

let getRecipe = async (filter, mealtype) => {

    if(mealtype != null) {
        mealtype = `&mealtype=${mealtype}`
    } else {
        mealtype = ``
    }

    const apiFilter = `?q=${filter}`
    const query = api + apiFilter + appId + appKey + mealtype + '&from=0&to=51'
    let result = await fetcher(query)
    
    renderRecipe(result)
}

const renderData = (e) => {
    e.preventDefault()
    overlay.classList.add('show')
    const formInput = select('form #recipe').value
    const radioButtons = selectName('mealtype')
    let checkedButton;
    radioButtons.forEach(button => {
        if(button.checked) {
            checkedButton = button.id
        }
    })
    if(!checkedButton) {
        checkedButton = null
    }
    console.log(formInput, checkedButton)
    getRecipe(formInput, checkedButton)
}

const setup = () => {
    prepareHeader()
    vApp = formApp()
    prepareForm()
}

const prepareHeader = () => {
    const domApp = render(header());
    mount(domApp, select('.header'))
    addEvent(select('.searchSwitch'), 'click', () => {
        mount(render(h('div', {
            attrs: {
                class: 'container'
            }
        })), select('.container'))
        select('.overlay').classList.remove('show')
        select('.search').classList.remove('hidden')
        select('form input').value = ''
    })
}

const prepareForm = () => {
    vNewApp = formApp();
    setTimeout(() => {
        overlay = select('.overlay')
        form = select('form')
        form.onsubmit = renderData
    }, 1001);
    mount(render(vNewApp), select('.search'))
    prepareDiffCheck()
}

const prepareDiffCheck = () => {
    let container = h('div', {
        attrs: {
            class: 'container'
        },
        children: []
    })
    rootEl = mount(render(container), select('.container'))
    setInterval(() => {
        const patch = diff(vApp, vNewApp);
        rootEl = patch(rootEl);
        vApp = vNewApp
    }, 50);
}

setup()