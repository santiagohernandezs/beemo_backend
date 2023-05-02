import userResolers from '../../user/domain/resolvers/index.ts'

const resolvers = {
  Query: {
    ...userResolers.Query
  },
  Mutation: {
    ...userResolers.Mutation
  }
}

export default resolvers
