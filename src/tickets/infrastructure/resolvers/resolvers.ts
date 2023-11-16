import { Resolver } from '@shared/types/core/types'
import mutations from './mutations'
import querys from './queries'

/**
 * Objeto que define los resolvers para las consultas y mutaciones de GraphQL.
 *
 * @property {Object} Query - Objeto que contiene las consultas de ticket.
 * @property {Object} Mutation - Objeto que contiene las mutaciones de ticket.
 */
const resolvers: Resolver = {
  Query: querys,
  Mutation: mutations
}

export default resolvers
