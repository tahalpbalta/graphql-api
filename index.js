import { ApolloServer , gql } from 'apollo-server'


import typeDefs from  './src/typeDefs.js'
import resolvers from './src/mergeres.js'

const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });