import h from '../virtualDom/createElement'

export default (result) => {
    const calories = ["reset", '1000-2000', '2000-3000']
    const returnArray = []
    calories.forEach(filterButton => {
        returnArray.push(h('button', {
            attrs: {

            },
            children: [filterButton]
        }))
    })
    return returnArray
    
}