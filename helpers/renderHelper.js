import {select, selectName} from './helper'
import {fetcher} from './fetch'
import {setData, getData, removeData, modifyData} from './localStorage'

async function renderHelper(apiData) {
    const overlay = select('.overlay');
    select('body').classList.remove('form-overlay')
    overlay.classList.add('show')
    const formInput = select('form #recipe').value
    setData('recipeValue', formInput)
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
    return await getRecipe(formInput, checkedButton, apiData)
}

const getRecipe = async (filter, mealtype, apiData) => {

    if(mealtype != null) {
        mealtype = `&mealtype=${mealtype}`
    } else {
        mealtype = ``
    }
    
    const apiFilter = `?q=${filter}`
    let randomKeyNumber = Math.floor(Math.random() * 6)
    const query = apiData.api + apiFilter + apiData.appId + apiData.appKey + apiData.appKeys[randomKeyNumber] + mealtype + '&from=0&to=51'
    return await fetcher(query)
}

export {renderHelper}