import h from '../createElement';

export default () => {
    return h('form', {
        attrs: {
          action: '',
          class: 'search'
        },
        children: [h('div', {
            attrs: {},
            children: [
                h('div', {
                    attrs: {},
                    children: [
                h('div', {
                    attrs: {
                        class: 'input'
                    },
                    children: [h('label', {
                        attrs: {
                            for: 'recipe',
                            class: 'hide'
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
                    })]
                })
                
            ,h('div', {
                attrs: {
                    class: 'radio'
                },
                children: [
                    h('div', {
                        attrs: {},
                        children: [h('label', {
                            attrs: {
                                for: 'breakfast'
                            },
                            children: [
                                'Breakfast'
                            ]
                            }),
                            h('input', {
                                attrs: {
                                    type: 'radio',
                                    id: 'Breakfast',
                                    name: 'mealtype'
                                }
                            }),]
                    }),
                    h('div', {
                        attrs: {},
                        children: [h('label', {
                            attrs: {
                                for: 'lunch'
                            },
                            children: [
                                'Lunch'
                            ]
                        }),
                        h('input', {
                            attrs: {
                                type: 'radio',
                                id: 'Lunch',
                                name: 'mealtype'
                            }
                        }),]
                    }),
                    
                    h('div', {
                        attrs: {},
                        children: [h('label', {
                            attrs: {
                                for: 'dinner'
                            },
                            children: [
                                'Dinner'
                            ]
                        }),
                        h('input', {
                            attrs: {
                                type: 'radio',
                                id: 'Dinner',
                                name: 'mealtype'
                            }
                        })]
                    }),
                ]
            }),
        ]
    })]
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

