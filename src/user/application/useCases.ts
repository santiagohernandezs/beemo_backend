import type { User } from '@prisma/client'
import { signToken } from '@shared/helpers/auth'
import { raise } from '@shared/helpers/errors'
import type { UserDTO } from '@user/types/core/types'
import { _deleteUserById, _newUser, _userByEmail, _userById, _users } from './helpers'

/**
 * Create a new user
 *
 * @param args - The user data as a UserDTO
 * @returns The user created
 */

const createUser = async (args: UserDTO): Promise<User> => _newUser(args)

/**
 * Get all the users
 *
 * @returns The all users
 */

const getUsers = async (): Promise<User[]> => await _users()

/**
 * Login user
 *
 * @param args - The user data as a email and password
 * @returns The user token
 */

const loginUser = async (args: Pick<UserDTO, 'email' | 'password'>): Promise<{ token: string }> => {
  const { email, password } = args

  const currentUser = await _userByEmail(email)

  if (currentUser.password !== password) raise('Auth', 'Password not match')

  const userToken = signToken(currentUser.id, currentUser.email)

  return {
    token: userToken
  }
}

/**
 * Get user by id
 *
 * @param args - Id of the user
 * @returns The user with the id passed
 */

const getUserById = async (id: string): Promise<User> => await _userById(id)

/**
 * Remove user
 *
 * @param args - Id of the user
 * @returns The user removed
 */

const removeUser = async (id: string): Promise<User> => await _deleteUserById(id)

export { createUser, getUserById, getUsers, loginUser, removeUser }

