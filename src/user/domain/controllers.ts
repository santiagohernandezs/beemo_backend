import type { Prisma } from '@prisma/client'
import prisma from '../../db/connection.ts'

const newUser = async (args: Prisma.UserCreateArgs) => {
  return await prisma.user.create(args)
}

const users = async (args: Prisma.UserFindManyArgs) => {
  return await prisma.user.findMany(args)
}

const user = async (args: Prisma.UserFindUniqueArgs) => {
  return await prisma.user.findUnique(args)
}

export { newUser, user, users }

