import h from './virtualDom/createElement';
import render from './virtualDom/render';
import mount from './virtualDom/mount'

import formApp from './virtualDom/components/formOverlay'
import header from './virtualDom/components/header'

let vApp;

let overlay,
    form;

let api = 'https://api.edamam.com/search'
let appId = '&app_id=f8bd8b97'
let appKey = '&app_key=db1e2d22f0a7e8cedde770beac059cba'

let renderRecipe = (result) => {
    let results = '';
    let newChildren = [];
    result.hits.map(result => {
        let ingredients = '';
        result.recipe.ingredientLines.map(ingredient => {
            ingredients += `<p>${ingredient}</p>`
        })
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
    const $app = render(vApp);
    mount($app, document.querySelector('.container'));
    setTimeout(() => {
        form.classList.remove('fade')
        form.classList.add('hidden')
    }, 300);
}

let getRecipe = async (filter) => {
    let apiFilter = `?q=${filter}`
    let query = api + apiFilter + appId + appKey
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

let renderData = (e) => {
    e.preventDefault()
    overlay.classList.add('show')
    let formInput = document.querySelector('form input').value
    console.log(formInput)
    getRecipe(formInput)
}

let setup = () => {
    prepareHeader()
    prepareForm()
}

let prepareHeader = () => {
    let $app = render(header());
    mount($app, document.querySelector('.header'))
    document.querySelector('.searchSwitch').addEventListener('click', () => {
        document.querySelector('.overlay').classList.remove('show')
        document.querySelector('.search').classList.remove('hidden')
        document.querySelector('form input').value = ''
    })
}

let prepareForm = () => {
    let $app = render(formApp());
    mount($app, document.querySelector('.search'));
    overlay = document.querySelector('.overlay')
    form = document.querySelector('form')
    form.onsubmit = renderData
}

setup()