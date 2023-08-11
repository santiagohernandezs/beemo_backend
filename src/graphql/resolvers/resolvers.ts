import rsResolvers from '@radioStation/infrastructure/resolvers/resolvers'
import serviceResolvers from '@service/infrastructure/resolvers/resolvers'
import ticketResolvers from '@tickets/infrastructure/resolvers/resolvers'
import userResolvers from '@user/infrastructure/resolvers/resolvers'

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
