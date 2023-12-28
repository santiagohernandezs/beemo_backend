import { User } from '@prisma/client'
import { raise } from '@shared/helpers/errors'
import { UserDTO } from '@user/types/core/types'
import { deletedUser, newUser, user, users } from '../domain/controllers'

const _userById = async (id: string): Promise<User> =>
  (await user({ where: { id } })) || raise('User', 'Cannot find user')

const _userByEmail = async (email: string): Promise<User> =>
  (await user({ where: { email } })) || raise('User', 'Cannot find user')

const _deleteUserById = async (id: string): Promise<User> =>
  (await deletedUser({ where: { id } })) || raise('User', 'Cannot find user')

const _users = async (): Promise<User[]> =>
  (await users({
    include: {
      tickets: true,
      comments: true
    }
  })) || raise('User', 'Cannot find users')

const _newUser = async (args: UserDTO): Promise<User> =>
  (await newUser({
    data: {
      ...args
    }
  })) || raise('User', 'Cannot create user')

export { _deleteUserById, _newUser, _userByEmail, _userById, _users }
