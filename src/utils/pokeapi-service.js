const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon'
const POKE_TYPE_API_URL = 'https://pokeapi.co/api/v2/type'
const axios = require('axios')

const getPokemonByName = async (name) => {
  try {
    const url = `${POKE_API_URL}/${name}`
    const pokemon = await axios({
      method: 'GET',
      url
    })
    return pokemon
  } catch (err) {
    throw new Error(err)
  }
}

const getPokemonById = async (id) => {
  try {
    const url = `${POKE_API_URL}/${id}`
    const pokemon = await axios({
      method: 'GET',
      url
    })
    return pokemon
  } catch (err) {
    throw new Error(err)
  }
}

const getPokemonsByType = async (type) => {
  try {
    const url = `${POKE_TYPE_API_URL}/${type}`
    let types = await axios({
      method: 'GET',
      url
    })
    const pokemons = types.data.pokemon.map(data => data.pokemon)
    return pokemons
  } catch (err) {
    throw new Error(err)
  }
}

const getPokemonsByRange = async (filter) => {
  try {
    const url = `${POKE_API_URL}/`
    let pokemons = await axios({
      method: 'GET',
      url,
      params: {...filter}
    })
    pokemons =  pokemons && pokemons.data && pokemons.data.results
    return pokemons
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getPokemonById,
  getPokemonByName,
  getPokemonsByRange,
  getPokemonsByType
}