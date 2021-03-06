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
import articleComponent from './components/article'
import calorieFilter from './components/calorieFilter'

import {select, selectAll, addEvent} from './helpers/helper'
import {fetcher} from './helpers/fetch'
import Routie from './helpers/routie'
import {renderHelper} from './helpers/renderHelper'
import setupDetailEvents from './helpers/setupEvents'
import removeFormOverlay from './helpers/removeFormOverlay'
import setupFormEvents from './helpers/setupFormEvents'
import { setData, getData } from './helpers/localStorage'

const apiData = {
    api: 'https://api.edamam.com/search',
    appId: '&app_id=f8bd8b97',
    appKeys: ['db1e2d22f0a7e8cedde770beac059cba', 'cceef9e29719bbb3c84e056a37615eb5', '6349910cae5650cc97de23cd60c4414c', '60ebf0acb24fa5b936be852166eaf1ea', 'c11c46d03c1e84e27954e96c690c16d9'],
    appKey: '&app_key='
}

let vApp;
//gets changed later on
let vNewApp = h('div', {
    attrs: {
        class: 'app'
    },
    children: []
})

let form,
    rootEl;
let container = h('div', {
    attrs: {
        class: 'container'
    },
    children: []
})
rootEl = mount(render(container), select('.container'))


setup()

async function renderData (e) {
    e.preventDefault()
    select('input').blur()
    let result = await renderHelper(apiData)
    if(result) {
        let resultString = JSON.stringify(result)
        setData('recipeQuery', resultString)
        renderRecipe(result)
    }else {
        vNewApp = h('div', {
            attrs: {
                class: 'container error'
            },
            children: [
                'Something went wrong, please try again'
            ]
        })
        select('form').classList.add('hidden')
        setTimeout(() => {
            select('.overlay').classList.remove('show')
        }, 100);
        prepareDiffCheck()
    }
}

function renderRecipe (result) {
    console.log(result)
    if(result.hits.length === 0) {
        vNewApp = h('div', {
            attrs: {
              id: 'app',
              class: 'container'
            },
            children: [h('main', {
                attrs: {
                    class: ''
                },
                children: [
                    'No results have been found'
                ]
            })]
          });
    } else {
        renderNewArticle(result)
        setupButtonEvents(result)
    }
    
    const form = select('form');
    form.classList.add('fade')

    form.classList.remove('fade')
    form.classList.add('hidden')
    select('.overlay').classList.remove('show')
    setupDetailEvents()
}

function setupButtonEvents(result) {
    const filterButtons = selectAll('button')
        filterButtons.forEach(button => {
            addEvent(button, 'click', function () {
                // filter array with valid result objects -> render articleComponent -> concat buttons with nnew articles ->update vapp
                let filterValue = this.textContent
                filterValue = filterValue === 'All' ? [0,10000] : filterValue.split('-')
                filterValue[0] = parseInt(filterValue[0]); filterValue[1] = parseInt(filterValue[1])
                const newHits = {
                    hits: result.hits.filter(function(hit) {
                    return hit.recipe.calories >= filterValue[0] && 
                            hit.recipe.calories <= filterValue[1]
                })
            }
                console.log(newHits)
                renderNewArticle(newHits)
                setupButtonEvents(result)
                setupDetailEvents()
            })
        }) 
}

function renderNewArticle(result) {
    const calorieFilters = calorieFilter()
        const newChildren = [];
        result.hits.map(result => {
            newChildren.push(articleComponent(result))
        })
        const elArray = calorieFilters.concat(newChildren);
        vNewApp = '';
        prepareDiffCheck()
        vNewApp = h('div', {
            attrs: {
              id: 'app',
              class: 'container'
            },
            children: [h('main', {
                attrs: {
                    class: ''
                },
                children: elArray
            })]
          });
        prepareDiffCheck()
}

function prepareHeader() {
    const domApp = render(header());
    mount(domApp, select('.header'))
    addEvent(select('.backSwitch'), 'click', () => {
        Routie(`overview`)
    })
    addEvent(select('.searchSwitch'), 'click', () => {
        setupFormEvents()
    })
}

function prepareForm() {
    vNewApp = formApp();
    mount(render(vNewApp), select('.search'))
    form = select('form')
    setupFormEvents()
    form.onsubmit = renderData
}

function prepareDiffCheck() {
    const patch = diff(vApp, vNewApp);
    rootEl = patch(rootEl);
    vApp = vNewApp
}

Routie('recipe/:id?', async (id) => {
    select('.backSwitch').classList.add('show')
    console.log(id)
    removeFormOverlay()
    let r = `?q=${id}`
    let randomKeyNumber = Math.floor(Math.random() * 6)
    console.log(apiData.appKeys, apiData.appKeys[randomKeyNumber], randomKeyNumber)
    const detailQuery = apiData.api + r + apiData.appId + apiData.appKey + apiData.appKeys[randomKeyNumber]
    console.log(detailQuery)
    const data = await fetcher(detailQuery)
    if(!data) {
        vNewApp = h('div', {
            attrs: {
                class: 'container error'
            },
            children: [
                'Something went wrong, please try again'
            ]
        })
        prepareDiffCheck()
    } else {
        vNewApp = createDetailPage(data)
        prepareDiffCheck()
    }
})
Routie("overview", () => {
    select('.backSwitch').classList.remove('show')
    let data = getData("recipeQuery");
    data = JSON.parse(data)
    console.log(data)
    renderRecipe(data)
})

function setup() {
    prepareHeader()
    vApp = formApp()
    prepareForm()
}