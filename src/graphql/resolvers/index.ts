import userResolers from '../../user/infrastructure/resolvers/index.ts'

const resolvers = {
  Query: {
    ...userResolers.Query
  },
  Mutation: {
    ...userResolers.Mutation
  }
}

export default resolvers
