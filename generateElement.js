function generateElement(tagName, attribute, ...childs) {
    const element = document.createElement(tagName);
    if (attribute) {
        Object.keys(attribute).forEach(key => {
            element.setAttribute(key, attribute[key])
        })
    }
    if (childs) {
        childs.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child))
            } else {
                element.appendChild(child);
            }
        })

    }
    return element;
}

export default generateElement;