function setData(key,data) {
    localStorage.setItem(key,JSON.stringify(data))
}
function getData(key) {
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key))
    }else{
        console.log(`Didn't find ${key} in localStorage`)
        return false
    }
}
function removeData(key) {
    localStorage.removeItem(key)
}




export {setData, getData, removeData}