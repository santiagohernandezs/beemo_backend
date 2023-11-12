import type { User } from '@prisma/client'
import { ResolverParams } from '@shared/types/core/types'
import { createUser, loginUser, removeUser } from '@user/application/useCases'
import type { CreateUserInput, LoginUserInput, RemoveUserInput } from '@user/types/core/types'

/**
 * Objeto Mutation que contiene los resolvers para las operaciones de mutación.
 *
 * @property {Function} createUser - Resolver para crear un usuario.
 * @property {Function} loginUser - Resolver para iniciar sesión de un usuario.
 * @property {Function} removeUser - Resolver para eliminar un usuario.
 */
const Mutation: Record<string, ResolverParams> = {
  /**
   * Resolver para crear un usuario.
   *
   * @async
   * @function
   * @param {unknown} _ - Ignorado.
   * @param {CreateUserInput} args - Argumentos para crear un usuario.
   * @returns {Promise} Promesa que resuelve con el usuario creado.
   */
  createUser: async (_: unknown, args: CreateUserInput): Promise<User> => createUser(args.input),

  /**
   * Resolver para iniciar sesión de un usuario.
   *
   * @async
   * @function
   * @param {unknown} _ - Ignorado.
   * @param {LoginUserInput} args - Argumentos para iniciar sesión de un usuario.
   * @returns {Promise} Promesa que resuelve con el usuario logueado.
   */
  loginUser: async (_: any, args: LoginUserInput): Promise<{ token: string }> => loginUser(args.input),

  /**
   * Resolver para eliminar un usuario.
   *
   * @async
   * @function
   * @param {unknown} _ - Ignorado.
   * @param {RemoveUserInput} args - Argumentos para eliminar un usuario.
   * @returns {Promise} Promesa que resuelve con el usuario eliminado.
   */
  removeUser: async (_: unknown, args: RemoveUserInput): Promise<User> => removeUser(args.input.id)
}

/**
 * Exportación por defecto del objeto Mutation.
 */
export default Mutation
