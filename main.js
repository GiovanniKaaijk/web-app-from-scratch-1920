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

let
    form,
    rootEl;


const renderData = async (e) => {
    e.preventDefault()
    let result = await renderHelper()
    
    renderRecipe(result)
}

const renderRecipe = (result) => {
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

const setupDetailEvents = async () => {
    let recipes = selectAll('article');
    recipes.forEach(recipe => {
        addEvent(recipe, 'click', initDetailPage)
    })
}

async function initDetailPage () {
    // window.history.replaceState("object or string", "Title", `/recipe/${this.dataset.uri}`);
    Routie(`recipe/${this.dataset.uri}`)
}

const prepareHeader = () => {
    const domApp = render(header());
    mount(domApp, select('.header'))
    addEvent(select('.searchSwitch'), 'click', () => {
        window.scrollTo(0,0)
        select('body').classList.add('form-overlay')
        select('.overlay').classList.remove('show')
        select('.search').classList.remove('hidden')
        select('form input').value = ''
    })
}

const prepareForm = () => {
    vNewApp = formApp();
    setTimeout(() => {
        form = select('form')
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
    let r = `?q=${id}`
    const detailQuery = api + r + appId + appKey
    console.log(detailQuery)
    const data = await fetcher(detailQuery)
    vNewApp = createDetailPage(data)
});

const setup = () => {
    prepareHeader()
    vApp = formApp()
    prepareForm()
}

setup()