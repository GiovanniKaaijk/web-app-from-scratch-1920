export default (tagName, { attrs, children }) => {
    const virtualElem = Object.create(null);
  
    Object.assign(virtualElem, {
      tagName,
      attrs,
      children,
    });
  
    return virtualElem;
  };