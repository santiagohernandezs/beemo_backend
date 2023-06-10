import { newUser, userById, users } from '../../domain/controllers.ts'

const createUser = async args => newUser(args)

const getUsers = async () => users()

const getUserById = async id => userById(id)

export { createUser, getUsers, getUserById }
