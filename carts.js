import generateElement from './generateElement.js';

const container = generateElement('div', {
    class: 'container'
})

function genrateCart(name, age) {
    const cart = generateElement(
        'div', {
            class: 'cart'
        },
        generateElement('span', null, `name: ${name}`),
        generateElement('span', null, `age: ${age}`))

    return cart;
}

const userData = [{
    name: 'poriya',
    age: 30
},
    {
        name: 'milad',
        age: 24
    },
    {
        name: 'amir',
        age: 20
    },
]

userData.forEach(data => {
    container.appendChild(genrateCart(data.name, data.age));
})

export default container;