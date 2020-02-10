export default (domNode, domTarget) => {
    domTarget.replaceWith(domNode);
    return domNode;
  };