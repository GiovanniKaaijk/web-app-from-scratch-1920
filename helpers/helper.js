function select(target) {
    return document.querySelector(target)
}

function selectAll(target) {
    return document.querySelectorAll(target)
}

function selectName(target) {
    return document.getElementsByName(target)
}

function addEvent(elem, event, callback) {
    return elem.addEventListener(event, callback)
}

export {select, selectAll, selectName, addEvent}