import { Pokemon, PokemonWithDetails } from '../models/pokemon.js'
import { capitalize } from '../utils/stringUtils.js'

const baseURL = 'https://pokeapi.co/api/v2/pokemon'

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.home.front_default

    return pokemon
}

function convertPokeApiToPokemonWithDetails(pokemonApi) {
    const pokemon = new PokemonWithDetails()
    pokemon.number = pokemonApi.id
    pokemon.name = pokemonApi.name

    const types = pokemonApi.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokemonApi.sprites.other.home.front_default

    pokemon.species = pokemonApi.species
    pokemon.height = pokemonApi.height
    pokemon.weight = pokemonApi.weight
    pokemon.abilities = pokemonApi.abilities
        .map(({ability}) => capitalize(ability.name))
        .join(', ')

    const pokemonStats = new Map(pokemonApi.stats.map(stat => [stat.stat.name, stat.base_stat]))
    pokemon.hp = pokemonStats.get('hp')
    pokemon.attack = pokemonStats.get('attack')
    pokemon.defense = pokemonStats.get('defense')
    pokemon.specialAttack = pokemonStats.get('special-attack')
    pokemon.specialDefense = pokemonStats.get('special-defense')
    pokemon.speed = pokemonStats.get('speed')
    pokemon.total = 0

    return pokemon
}

export async function getPokemonDetails(url) {
    const pokemonDetails = await fetch(url).then((res => res.json()))

    return convertPokeApiToPokemonWithDetails(pokemonDetails)
}

export async function getPokemonByName(name) {
    const url = `${baseURL}/${name}`

    return getPokemonDetails(url)
}

export async function getPokemons(offset = 0, limit = 5) {
    const url = `${baseURL}?offset=${offset}&limit=${limit}`

    const { results: pokemons } = await fetch(url).then(res => res.json())
    
    const pokemonsWithDetails = await Promise.all(
        pokemons.map(pokemon => getPokemonDetails(pokemon.url))
    )
    
    return pokemonsWithDetails
}
