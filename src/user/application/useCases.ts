import type { User } from '@prisma/client'
import { raise } from '@shared/helpers/errors'
import { deletedUser, newUser, user, users } from '@user/domain/controllers'
import type { UserDTO } from '@user/types/core/types'
import jwt from 'jsonwebtoken'

/**
 * Create a new user
 *
 * @param args - The user data as a UserDTO
 * @returns The user created
 */

const createUser = async (args: UserDTO): Promise<User> =>
  newUser({
    data: {
      ...args
    }
  })

/**
 * Get all the users
 *
 * @returns The all users
 */

const getUsers = async (): Promise<User[]> =>
  users({
    include: {
      tickets: true
    }
  })

/**
 * Login user
 *
 * @param args - The user data as a email and password
 * @returns The user token
 */

const loginUser = async (args: Pick<UserDTO, 'email' | 'password'>): Promise<{ token: string }> => {
  const { email, password } = args

  const currentUser = (await user({ where: { email } })) as Pick<User, 'id' | 'password' | 'email'>

  if (!currentUser) raise('User', 'User not found')
  if (currentUser.password !== password) raise('Auth', 'Password not match')

  const userToken = jwt.sign(
    {
      email: currentUser.email,
      id: currentUser.id
    },
    process.env.SECRET_KEY || 'secret',
    {
      algorithm: 'HS256',
      expiresIn: '12h'
    }
  )

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

const getUserById = async (id: string): Promise<User | null> => await user({ where: { id } })

/**
 * Remove user
 *
 * @param args - Id of the user
 * @returns The user removed
 */

const removeUser = async (id: string): Promise<User> => await deletedUser({ where: { id } })

export { createUser, getUserById, getUsers, loginUser, removeUser }
