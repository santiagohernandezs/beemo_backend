import rsResolvers from '../../radioStation/infrastructure/resolvers/index.ts'
import serviceResolvers from '../../service/infrastructure/resolvers/index.ts'
import ticketResolvers from '../../tickets/infrastructure/resolvers/index.ts'
import userResolvers from '../../user/infrastructure/resolvers/index.ts'

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...ticketResolvers.Query,
    ...serviceResolvers.Query,
    ...rsResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...ticketResolvers.Mutation,
    ...serviceResolvers.Mutation
  }
}

export default resolvers
