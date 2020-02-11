import {select, selectName} from './helper'
import {fetcher} from './fetch'




const api = 'https://api.edamam.com/search'
const appId = '&app_id=f8bd8b97'
const appKey = '&app_key=db1e2d22f0a7e8cedde770beac059cba'

async function renderHelper() {
    const overlay = select('.overlay');
    select('body').classList.remove('form-overlay')
    overlay.classList.add('show')
    const formInput = select('form #recipe').value
    const radioButtons = selectName('mealtype')
    let checkedButton;
    console.log(formInput)
    radioButtons.forEach(button => {
        if(button.checked) {
            checkedButton = button.id
        }
    })
    if(!checkedButton) {
        checkedButton = null
    }
    return await getRecipe(formInput, checkedButton)
}

const getRecipe = async (filter, mealtype) => {

    if(mealtype != null) {
        mealtype = `&mealtype=${mealtype}`
    } else {
        mealtype = ``
    }
    const apiFilter = `?q=${filter}`
    const query = api + apiFilter + appId + appKey + mealtype + '&from=0&to=51'
    console.log(await fetcher(query),query)
    return await fetcher(query)
    
}

export {renderHelper}