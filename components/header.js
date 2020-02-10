import h from '../virtualDom/createElement';

export default () => {
    return h('header', {
        attrs: {},
        children: [h('img', {
            attrs: {
                src: './images/search.svg',
                alt: 'search icon',
                class: 'searchSwitch'
            }
        })]
      });
}

