import render from './render';

const diffAttrs = (oldAttrs, newAttrs) => {
  const patches = [];

  // setting newAttrs
  // add key to element
  Object.keys(newAttrs).forEach(key => {
    patches.push(domNode => {
      domNode.setAttribute(key, newAttrs[key]);
      return domNode;
    });
  })

  // removing attrs
  // if key does not exist in new attributes
  Object.keys(oldAttrs).forEach(key => {
if (!(key in newAttrs)) {
      patches.push(domNode => {
        domNode.removeAttribute(key);
        return domNode;
      });
    }
  })

  // returns the full container wrapped
  // removes or adds attributes
  return domNode => {
    patches.forEach(patch => {
      patch(domNode);
    })
    return domNode;
  };
};

const diffChildren = (oldVChildren, newVChildren) => {
  const childPatches = [];
  if(oldVChildren != undefined) {
    oldVChildren.forEach((oldVChild, i) => {
        childPatches.push(diff(oldVChild, newVChildren[i]));
      });
  }

  const additionalPatches = [];
  if(newVChildren != undefined) {
    newVChildren.slice(oldVChildren.length).forEach(additionalVChild => {
        additionalPatches.push(domNode => {
            domNode.appendChild(render(additionalVChild));
            return domNode;
          });
      })
  }

  return domParent => {
    // since childPatches are expecting the domChild, not domParent,
    // for each childPatch -> compare old children with new children
    
    domParent.childNodes.forEach((domChild, i) => {
      childPatches[i](domChild);
    });
    additionalPatches.forEach(patch => {
      patch(domParent);
    })
    return domParent;
  };
};

const diff = (oldVTree, newVTree) => {
  
  if (newVTree === undefined) {
    return domNode => {
      domNode.remove();
      // the patch should return the new root node.
      // since there is none in this case,
      // we will just return undefined.
      return undefined;
    }
  }

  if (typeof oldVTree === 'string' ||
    typeof newVTree === 'string') {
    if (oldVTree !== newVTree) {
      // could be 2 cases:
      // 1. both trees are string and they have different values
      // 2. one of the trees is text node and
      //    the other one is elem node
      // Either case, we will just render(newVTree)!
      return domNode => {
         const newDomNode = render(newVTree);
         domNode.replaceWith(newDomNode);
         return newDomNode;
       };
    } else {
      // this means that both trees are string
      // and they have the same values
      return domNode => domNode;
    }
  }

  if (oldVTree.tagName !== newVTree.tagName) {
    // we assume that they are totally different and 
    // will not attempt to find the differences.
    // simply render the newVTree and mount it.
    return domNode => {
      const newDomNode = render(newVTree);
      domNode.replaceWith(newDomNode);
      return newDomNode;
    };
  }

  const patchAttrs = diffAttrs(oldVTree.attrs, newVTree.attrs);
  const patchChildren = diffChildren(oldVTree.children, newVTree.children);

  return domNode => {
    patchAttrs(domNode);
    patchChildren(domNode);
    return domNode;
  };
};

export default diff;