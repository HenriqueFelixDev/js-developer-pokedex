import { createElement } from "./element.js"

function createPokemonType(type) {
    return createElement('li', {
        className: `chip ${type}`
    }, type)
}

export function createPokemonTypeChips(types, horizontal = false) {
    return createElement('ul', {
        className: `pokemon-types ${horizontal ? 'pokemon-types--horizontal' : ''}`,
        children: types.map(createPokemonType)
    })
}