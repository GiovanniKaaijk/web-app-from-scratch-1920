import h from '../createElement';

export default () => {
    return h('form', {
        attrs: {
          action: '',
          class: 'root'
        },
        children: [h('div', {
            attrs: {},
            children: [
                h('label', {
                    attrs: {
                        for: 'recipe'
                    },
                    children: [
                        'What do you feel like eating?'
                    ]
                }),
                h('input', {
                    attrs: {
                        id: 'recipe',
                        placeholder: 'What do you feel like eating?',
                        type: 'text'
                    }
                }),
                h('button', {
                    attrs: {},
                    children: [
                        h('img', {
                            attrs: {
                                src: './images/search.svg',
                                alt: 'search icon'
                            }
                        }),
                        h('p', {
                            attrs: {},
                            children: [
                                'Search'
                            ]
                        })
                    ]
                })
            ]
        }), h('div', {
            attrs: {
                class: 'overlay'
            },
            children: [
                h('img', {
                    attrs: {
                        class: 'spinner',
                        src: './images/load.svg',
                        alt: 'spinner'
                    }
                })
            ]
    
        })]
      });
}

