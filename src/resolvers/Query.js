const PokeAPI = require('../utils/pokeapi-service')
const { transformPokemon } = require('../utils/pokemon-transformer')


async function pokemonById (parent, args, context) {
  try {
    let pokemon = await PokeAPI.getPokemonById(args.id)
    pokemon = transformPokemon(pokemon.data)
    return pokemon
  } catch(err) {
    throw new Error(err)
  }
}

async function pokemonByName (parent, args, context) {
  try {
    let pokemon = await PokeAPI.getPokemonByName(args.name)
    pokemon = transformPokemon(pokemon.data)
    return pokemon
  } catch(err) {
    throw new Error(err)
  }
}

async function pokemonsByType (parent, args, context) {
  try {
    let pokemons = await PokeAPI.getPokemonsByType(args.type)
    return pokemons 
  } catch (err) {
    throw new Error(err)
  }
}

async function pokemons (parent, args, context) {
  try {
    const filter = {
      offset: args.skip ? args.skip : 0,
      limit: args.first ? args.first : 20
    }
    let pokemons = await PokeAPI.getPokemonsByRange(filter)
    return pokemons
  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  pokemonById,
  pokemonByName,
  pokemonsByType,
  pokemons
}