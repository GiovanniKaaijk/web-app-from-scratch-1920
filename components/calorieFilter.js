import h from '../virtualDom/createElement'

export default (result) => {
    const calories = ["All", '1000-2000', '2000-3000', '3000-5000']
    const array = []
    calories.forEach(filterButton => {
        array.push(h('button', {
            attrs: {

            },
            children: [filterButton]
        }))
    })
    const returnArray = [h('div', {
        attrs: {},
        children: [
            h('p', {
                attrs: {},
                children: [
                    'Filter op caloriën'
                ]
            }), ...array]
    })]
    return returnArray
    
}