import prisma from '@db/connection'
import { type Prisma } from '@prisma/client'
import { raise } from '@shared/helpers/errors'

const newUser = async (args: Prisma.UserCreateArgs) =>
  await prisma.user
    .create(args)
    .catch(err => raise('User', 'Cannot create user', err))
    .finally(async () => await prisma.$disconnect())

const users = async (args: Prisma.UserFindManyArgs) =>
  await prisma.user
    .findMany(args)
    .catch(err => raise('User', 'Cannot find users', err))
    .finally(async () => await prisma.$disconnect())

const user = async (args: Prisma.UserFindUniqueArgs) =>
  await prisma.user
    .findUnique(args)
    .catch(err => raise('User', 'Cannot find user', err))
    .finally(async () => await prisma.$disconnect())

export { newUser, user, users }
