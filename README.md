  

# graphql-pokedex

  

A minimal GraphQL layer for the PokeAPI API.

Momentarily there are only 4 available queries which I'll go through below.

  

## Installation

  

Make sure that you have installed Docker globally.

Otherwise check [this]: https://docs.docker.com/v17.09/engine/installation/ link.

  

After you have installed Docker, create a container for your prisma database

  

	sudo docker-compose up -d

  

Now you only have to install the dependencies required.

  

	yarn add

  

## Queries

  

- Get pokemon by ID returns a Pokemon object

  

		query {
		 pokemonById (id: <Int>) {
		  name
		  ...
		 }
		}

  

- Get pokemon by name returns a Pokemon object

  

		query {
		 pokemonByName (name: <String>) {
		  name
		  ...
		 }
		}

  

- Get pokemons by type returns a list of PokemonInfo objects

  

		query {
		 pokemonsByType (type: <String>) {
		  name
		  url
		 }
		}

  

- Get pokemons returns a list of PokemonInfo objects

  

		query {
		 pokemons (skip?: <Int>, limit?: <Int>, orderBy?: <PokemonOrderInput>) {
		  name
		  url
		 }
		}

## Related schemas
  
	type Pokemon {
		id: ID!
		name: String!
		order: Int!
		sprite: String!
		types: [PokemonType]!
	}
	  
	type PokemonInfo {
		name: String!
		url: String!
	}
	  
	type PokemonType {
		slot: Int!
		type: Type!
	}

	type Type {
		id: ID!
		name: PokemonTypesListInput!
		url: String!
	}
	  
	enum PokemonOrderByInput {
		order_ASC
		order_DESC
		name_ASC
		name_DESC
	}

	enum PokemonTypesListInput {
		Normal
		Fire
		Water
		Grass
		Electric
		Ice
		Fighting
		Poison
		Ground
		Flying
		Psychic
		Bug
		Rock
		Ghost
		Dark
		Dragon
		Steel
		Fairy
	}

## Further adjustments

- using local database
- implementing seeds
- implementing logger
- implementing custom error messages
-	passing variables to local environment