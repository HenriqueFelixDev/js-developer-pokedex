import { createElement } from "./element.js"
import { createPokemonTypeChips } from "./pokemonTypes.js"

function createCardHeader(pokemon) {
    const pokemonNumber = createElement('p', {
        className: 'pokemon-card__number',
        children: []
    }, '#' + pokemon.number.toString().padStart(3, '0'))

    const pokemonName = createElement('p', {
        className: 'pokemon-card__name',
        children: []
    }, pokemon.name)

    const pokemonHeader = createElement('header', {
        className: 'pokemon-card__header',
        children: [pokemonName, pokemonNumber]
    })

    return pokemonHeader
}

function createCardDetails(pokemon) {
    const pokemonImage = createElement('img', {
        className: 'pokemon-card__image',
        src: pokemon.photo,
        alt: `Imagem do pokemon ${pokemon.name}`
    })


    const cardDetails = createElement('div', {
        className: 'pokemon-card__details',
        children: [ createPokemonTypeChips(pokemon.types), pokemonImage ]
    })

    return cardDetails
}

function createPokeballImage() {
    const element = createElement('div')

    element.innerHTML = `
        <svg class="pokemon-card__background-pokeball" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537 537" width="100" height="100" fill="#ffffff2a">
            <path  d="m267 537c-182.4 0-261.5-159-268-238.9 74.4 0.1 119.7-0.1 119.7-0.1 0 0 32.3 123.1 148.3 120.5 103.8-2.4 136-78 146.2-120.4 63.2 0 70.7 0 120.8 0-4.8 64.7-75.2 238.9-267 238.9z"/>
            <path  d="m267 0c182.4 0 261.5 159 268 238.9-74.4-0.1-119.7 0.1-119.7 0.1 0 0-32.3-123.1-148.3-120.5-103.8 2.4-136 78-146.2 120.4-63.2 0-70.7 0-120.8 0 4.8-64.7 75.2-238.9 267-238.9z"/>
            <path  d="m268 369c-55.3 0-100-44.7-100-100 0-55.3 44.7-100 100-100 55.3 0 100 44.7 100 100 0 55.3-44.7 100-100 100z"/>
        </svg>
    `
    return element
}

export function createPokemonCard(pokemon) {

    const pokemonCard = createElement('article', {
        className: 'pokemon-card ' + pokemon.type,
        children: [
            createCardHeader(pokemon),
            createCardDetails(pokemon),
            createPokeballImage()
        ]
    })

    const cardLink = createElement('a', {
        href: `/pokemon.html?name=${pokemon.name}#about`,
        style: 'text-decoration: none;',
        children: [
            pokemonCard
        ]
    })

    return cardLink
}

//     <article class="pokemon-card ${pokemon.type}">
//         <header class="pokemon-card__header">
//             <p class="pokemon-card__name">${pokemon.name}</p>
//             <p class="pokemon-card__number">#${pokemon.number.toString().padStart(3, '0')}</p>
//         </header>

//         <div class="pokemon-card__details">
//             <ul class="pokemon-card__types">
//                 ${pokemon.types.map((type) => `<li class="pokemon-card__type ${type}">${type}</li>`).join('')}
//             </ul>

//             <img
//                 class="pokemon-card__image" 
//                 src="${pokemon.photo}"
//                 alt="Imagem do pokemon ${pokemon.name}"
//             >
//         </div>

//         <svg class="pokemon-card__background-pokeball" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537 537" width="100" height="100" fill="#ffffff2a">
//             <path  d="m267 537c-182.4 0-261.5-159-268-238.9 74.4 0.1 119.7-0.1 119.7-0.1 0 0 32.3 123.1 148.3 120.5 103.8-2.4 136-78 146.2-120.4 63.2 0 70.7 0 120.8 0-4.8 64.7-75.2 238.9-267 238.9z"/>
//             <path  d="m267 0c182.4 0 261.5 159 268 238.9-74.4-0.1-119.7 0.1-119.7 0.1 0 0-32.3-123.1-148.3-120.5-103.8 2.4-136 78-146.2 120.4-63.2 0-70.7 0-120.8 0 4.8-64.7 75.2-238.9 267-238.9z"/>
//             <path  d="m268 369c-55.3 0-100-44.7-100-100 0-55.3 44.7-100 100-100 55.3 0 100 44.7 100 100 0 55.3-44.7 100-100 100z"/>
//         </svg>
//     </article>