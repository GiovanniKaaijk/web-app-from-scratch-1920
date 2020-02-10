const renderElem = ({ tagName, attrs, children}) => {
    const domEl = document.createElement(tagName);
  
    //assign attrs to element ex. class=""
    Object.keys(attrs).forEach(key => {
      domEl.setAttribute(key, attrs[key])
    })

    //add children to elem
    if(children) {
        children.forEach(child => {
            domEl.appendChild(render(child));
        });
    }
    return domEl;
  };
  
  const render = (vNode) => {
    if (typeof vNode === 'string') {
      return document.createTextNode(vNode);
    }

    return renderElem(vNode);
  };
  
  export default render;