import h from '../virtualDom/createElement'

export default (result) => {
    if(!result.recipe.uri) throw new Error('no recipe uri')
        const dataUri = result.recipe.uri
        let r = dataUri.split('recipe_')
        r = r[1]
        const dataCal = Math.floor(parseInt(result.recipe.calories))
    return h('article', {
        attrs: {
            class: 'object-wrapper',
            "data-uri": r,
            "data-calories": dataCal
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
    })
}