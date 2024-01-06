import type { User } from '@prisma/client'
import { ResolverParams } from '@shared/types/core/types'
import { getUserById, getUsers } from '@user/application/useCases'
import type { FindUserById } from '@user/types/core/types'

/**
 * Objeto Query que define las consultas GraphQL para los usuarios.
 *
 * @property {Function} users - Función que devuelve todos los usuarios.
 * @property {Function} userById - Función que devuelve un usuario por su ID.
 */
const Query: Record<string, ResolverParams> = {
  /**
   * Consulta para obtener todos los usuarios.
   *
   * @returns {Promise} Una promesa que se resuelve con la lista de todos los usuarios.
   */
  users: async (): Promise<User[]> => await getUsers(),

  /**
   * Consulta para obtener un usuario por su ID.
   *
   * @param {unknown} _ - Parámetro no utilizado.
   * @param {FindUserById} args - Argumentos de la consulta.
   * @returns {Promise} Una promesa que se resuelve con el usuario encontrado.
   */
  userById: async (_: unknown, args: FindUserById): Promise<User | null> => await getUserById(args.input.id)
}

export default Query
