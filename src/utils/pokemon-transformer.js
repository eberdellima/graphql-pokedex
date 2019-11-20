const PokemonTypes = require('./enum-pokemon-types')

function transformPokemon (pokemonData) {
  try {
    return {
      name: pokemonData.name,
      order: pokemonData.order,
      sprite: pokemonData.sprites ? pokemonData.sprites.front_default : '',
      types: pokemonData.types.map(type => {
        return {
          slot: type.slot,
          type: {
            name: PokemonTypes[type.type.name],
            url: type.type.url
          }
        }
      })
    }
  } catch(err) {
    throw new Error(err)
  }
}

module.exports = {
  transformPokemon
}