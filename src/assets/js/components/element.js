export function createElement(elementType, { className, children, ...props } = {}, textContent) {
    const element = document.createElement(elementType)

    for(let key in props) {
        element.setAttribute(key, props[key])
    }

    className && element.classList.add(...className.trim().split(' '))

    children && element.append(...children)

    textContent && (element.innerText = textContent)

    return element
}