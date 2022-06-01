function generateElement(tagName, attribute, ...childs) {
    const element = document.createElement(tagName);
    if (attribute) {
        Object.keys(attribute).forEach(key => {
            element.setAttribute(key, attribute[key])
        })
    }
    if (childs) {
        childs.forEach(child => {
            element.appendChild(child);
        })

    }
    return element;
}


const container = generateElement('div', {
    class: 'container'
});

function generateCart(name, age) {

    const cart = generateElement('div', {class: 'cart'})
    const nameEl = document.createElement('span');
    nameEl.innerText = `name: ${name}`;

    const ageEl = document.createElement('div');
    ageEl.innerText = `age ${age}`;
    cart.appendChild(nameEl)
    cart.appendChild(ageEl);
    return cart
}

const userData = [
    {name: 'alireza', age: 30},
    {name: 'mohammad', age: 10},
    {name: 'mahdi', age: 5},
]
userData.forEach(data => {

    container.appendChild(generateCart(data.name, data.age));
})
document.body.appendChild(container)