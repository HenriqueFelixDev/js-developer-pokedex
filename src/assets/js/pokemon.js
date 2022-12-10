import { createPokemonTypeChips } from "./components/pokemonTypes.js";
import { getPokemonByName } from "./domain/api/pokeApi.js";
import { convertDecimalToFeetAndInches, convertKgToLibras } from "./domain/utils/mathUtils.js";
import { getRouteParams } from "./domain/utils/routerUtils.js";

const params = getRouteParams()

const name = params.get('name')

if (!name) {
    location.replace('/')
}


async function renderPokemon() {
    const pokemon = await getPokemonByName(name)

    console.log({pokemon})
    
    document.body.classList.add(pokemon.type)

    document.querySelector('.pokemon-header__title').innerText = pokemon.name
    document.querySelector('.pokemon-header__number').innerText = '#' + pokemon.number.toString().padStart(3, '0')
    document.querySelector('.pokemon-header__content').appendChild(createPokemonTypeChips(pokemon.types, true))
    document.querySelector('.pokemon-display__image').src = pokemon.photo

    // About
    document.querySelector('[data-stat=species]').innerText = pokemon.species.name
    document.querySelector('[data-stat=height]').innerText = `${convertDecimalToFeetAndInches(pokemon.height / 10)} (${(pokemon.height / 10).toFixed(2)} m)`
    document.querySelector('[data-stat=weight]').innerText = `${(convertKgToLibras(pokemon.weight / 10)).toFixed(1)} lbs (${(pokemon.weight / 10).toFixed(1)} kg)`
    document.querySelector('[data-stat=abilities]').innerText = pokemon.abilities
    
    // Base Stats
    document.querySelector('[data-stat=hp]').innerText = pokemon.hp
    document.querySelector('[data-progress=hp]').value = pokemon.hp
    document.querySelector('[data-stat=attack]').innerText = pokemon.attack
    document.querySelector('[data-progress=attack]').value = pokemon.attack
    document.querySelector('[data-stat=defense]').innerText = pokemon.defense
    document.querySelector('[data-progress=defense]').value = pokemon.defense
    document.querySelector('[data-stat=special-attack]').innerText = pokemon.specialAttack
    document.querySelector('[data-progress=special-attack]').value = pokemon.specialAttack
    document.querySelector('[data-stat=special-defense]').innerText = pokemon.specialDefense
    document.querySelector('[data-progress=special-defense]').value = pokemon.specialDefense
    document.querySelector('[data-stat=speed]').innerText = pokemon.speed
    document.querySelector('[data-progress=speed]').value = pokemon.speed
    document.querySelector('[data-stat=total]').innerText = pokemon.total
    document.querySelector('[data-progress=total]').value = pokemon.total
}

renderPokemon()