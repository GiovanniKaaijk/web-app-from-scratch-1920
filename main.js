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

let
    form,
    rootEl;


const renderData = async (e) => {
    e.preventDefault()
    let result = await renderHelper(apiData)
    if(result) {
        let resultString = JSON.stringify(result)
        setData('recipeQuery', resultString)
    }
    renderRecipe(result)
}

const renderRecipe = (result) => {
    console.log(result)
    const newChildren = [];
    result.hits.map(result => {
        newChildren.push(articleComponent(result))
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

    console.log(vNewApp)
    const form = select('form');
    form.classList.add('fade')

    setTimeout(() => {
        form.classList.remove('fade')
        form.classList.add('hidden')
    }, 300);
    setTimeout(() => {
        setupDetailEvents()
    }, 100);
}

const prepareHeader = () => {
    const domApp = render(header());
    mount(domApp, select('.header'))
    addEvent(select('.searchSwitch'), 'click', () => {
        setupFormEvents()
    })
}

const prepareForm = () => {
    vNewApp = formApp();
    setTimeout(() => {
        form = select('form')
        setupFormEvents()
        form.onsubmit = renderData
    }, 100);
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

Routie('recipe/:id?', async (id) => {
    console.log(id)
    removeFormOverlay()
    let r = `?q=${id}`
    let randomKeyNumber = Math.floor(Math.random() * 6)
    console.log(apiData.appKeys, apiData.appKeys[randomKeyNumber], randomKeyNumber)
    const detailQuery = apiData.api + r + apiData.appId + apiData.appKey + apiData.appKeys[randomKeyNumber]
    console.log(detailQuery)
    const data = await fetcher(detailQuery)
    vNewApp = createDetailPage(data)
})
Routie("overview", () => {
    let data = getData("recipeQuery");
    data = JSON.parse(data)
    renderRecipe(data)
})

const setup = () => {
    prepareHeader()
    vApp = formApp()
    prepareForm()
}

setup()