import bookMutationResolvers  from './schema/book/mutationResolvers.js'
import bookQueryResolvers  from './schema/book/queryResolvers.js'
import authorMutationResolvers  from './schema/author/mutationResolvers.js'
import authorQueryResolvers  from './schema/author/queryResolvers.js'

const resolvers = {
  Mutation: {
    ...bookMutationResolvers.Mutation,
    ...authorMutationResolvers.Mutation,
  },
  Query: {
    ...bookQueryResolvers.Query,
    ...authorQueryResolvers.Query,
  },
};
export default resolvers;
