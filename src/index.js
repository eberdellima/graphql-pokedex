const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../prisma/generated/prisma-client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Pokemon = require('./resolvers/Pokemon')
const PokemonType = require('./resolvers/PokemonType')

const resolvers = {
  Query,
  Mutation,
  Pokemon,
  PokemonType
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
})

server.start(() => console.log('Server is running on http://localhost:4000'))