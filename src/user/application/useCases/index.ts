import { newUser, user, users } from '../../domain/controllers.ts'
import type { UserDTO } from '../../types/core/types.ts'

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

const getUserById = async (id: string) => user({ where: { id } })

export { createUser, getUserById, getUsers }

