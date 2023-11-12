import { Resolver } from '@shared/types/core/types'
import userMutation from './mutations'
import userQuery from './queries'

/**
 * Objeto que define los resolvers para las consultas y mutaciones de GraphQL.
 *
 * @property {Object} Query - Objeto que contiene las consultas de usuario.
 * @property {Object} Mutation - Objeto que contiene las mutaciones de usuario.
 */
const resolvers: Resolver = {
  Query: userQuery,
  Mutation: userMutation
}

export default resolvers
