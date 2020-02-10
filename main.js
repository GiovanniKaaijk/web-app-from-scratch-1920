import h from './virtualDom/createElement';
import render from './virtualDom/render';
import mount from './virtualDom/mount'

import formApp from './components/formOverlay'
import header from './components/header'
import {select, selectAll,selectName, addEvent} from './helpers/helper'

let vApp;

let overlay,
    form;

const renderRecipe = (result) => {
    const newChildren = [];
    result.hits.map(result => {
        // let ingredients = '';
        // result.recipe.ingredientLines.map(ingredient => {
        //     ingredients += `<p>${ingredient}</p>`
        // })
        // <p>Calories: ${Math.floor(result.recipe.calories)}</p>
        //         <div>
        //             <p>Ingredients:</p>
        //             ${ingredients}
        //         </div>
        
        newChildren.push(h('article', {
            attrs: {
                class: 'object-wrapper'
            },
            children: [
                h('div', {
                    attrs: {
                        class: 'img-wrapper',
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
    
    vApp = h('div', {
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
    const domApp = render(vApp);
    mount(domApp, select('.container'));
    setTimeout(() => {
        form.classList.remove('fade')
        form.classList.add('hidden')
    }, 300);
}

let getRecipe = async (filter, mealtype) => {
    const api = 'https://api.edamam.com/search'
    const appId = '&app_id=f8bd8b97'
    const appKey = '&app_key=db1e2d22f0a7e8cedde770beac059cba'

    if(mealtype != null) {
        mealtype = `&mealtype=${mealtype}`
    } else {
        mealtype = ``
    }

    const apiFilter = `?q=${filter}`
    const query = api + apiFilter + appId + appKey + mealtype + '&from=0&to=51'
    console.log(query)
    let result;
    await fetch(query)
        .then(res => {
            if(res.status === 200) {
                console.log(200)
                return res.json()
            }
        })
        .then(json => {
            console.log(json)
            result = json
        }).catch(err => {console.log(err)})

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
    const domApp = render(formApp());
    mount(domApp, select('.search'));
    overlay = select('.overlay')
    form = select('form')
    form.onsubmit = renderData
}

setup()