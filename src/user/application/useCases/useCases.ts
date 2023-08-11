import { raise } from '@shared/helpers/errors'
import { newUser, user, users } from '@user/domain/controllers'
import type { UserDTO } from '@user/types/core/types'
import jwt from 'jsonwebtoken'

const createUser = async (args: UserDTO) =>
  newUser({
    data: {
      ...args
    }
  })

const getUsers = async () =>
  users({
    include: {
      tickets: true
    }
  })

const loginUser = async (args: Pick<UserDTO, 'email' | 'password'>) => {
  const { email, password } = args

  const currentUser = await user({ where: { email } })

  if (!currentUser) raise('User', 'User not found')
  if (currentUser?.password !== password) raise('Auth', 'Password not match')

  const userToken = jwt.sign(
    {
      email: currentUser?.email,
      id: currentUser?.id
    },
    process.env.SECRET_KEY || 'secret',
    {
      algorithm: 'HS256',
      expiresIn: '1d'
    }
  )

  return {
    token: userToken
  }
}

const getUserById = async (id: string) => await user({ where: { id } })

export { createUser, getUserById, getUsers, loginUser }
