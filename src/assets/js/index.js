import { getPokemons } from "./domain/api/pokeApi.js"
import { createPokemonCard } from "./components/pokemonCard.js"
import { getRouteParams } from "./domain/utils/routerUtils.js"

const pokemonList = document.getElementById('pokemons')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxItens = 151
const limit = 10
let offset = 0

async function loadPokemonItens(offset, limit) {
    const pokemons = await getPokemons(offset, limit)
    
    const pokemonsFragment = document.createDocumentFragment()
    pokemonsFragment.append(...pokemons.map(createPokemonCard))

    pokemonList.append(pokemonsFragment)
}

loadPokemonItens(offset, limit)


console.log(getRouteParams())

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const currentLimit = Math.min(limit, maxItens - offset)
    loadPokemonItens(offset, currentLimit)

    const nextOffset = offset + limit
    if (nextOffset >= maxItens) {
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
})