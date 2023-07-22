import serviceResolvers from '../../service/infrastructure/resolvers/index.ts'
import ticketResolvers from '../../tickets/infrastructure/resolvers/index.ts'
import userResolvers from '../../user/infrastructure/resolvers/index.ts'
import clientResolvers from '../../client/infrastructure/resolvers/index.ts'

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...ticketResolvers.Query,
    ...serviceResolvers.Query,
    ...clientResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...ticketResolvers.Mutation,
    ...serviceResolvers.Mutation,
    ...clientResolvers.Mutation
  }
}

export default resolvers
