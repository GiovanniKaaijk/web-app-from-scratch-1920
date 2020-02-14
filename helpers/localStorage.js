function setData(key,data) {
    console.log(`📦 Adding ${key} to localStorage`)
    localStorage.setItem(key,JSON.stringify(data))
}
function getData(key) {
    console.log(`📦 Trying to get ${key} from localStorage`)
    if(localStorage.getItem(key)){
        console.log(`📦 Found ${key} in localStorage`)
        return JSON.parse(localStorage.getItem(key))
    }else{
        console.log(`📦 Didn't find ${key} in localStorage`)
        return false
    }
}
function removeData(key) {
    console.log(`📦 Removing ${key} from localStorage`)
    localStorage.removeItem(key)
}

function modifyData(key,objKey,value) {
    let data = this.get(key)
    if(data && typeof data === 'object'){
        console.log(`📦 Modified ${objKey} in ${key} `)
        data[objKey] = value
        this.set(key,data)
        return data
    }
}


export {setData, getData, removeData, modifyData}