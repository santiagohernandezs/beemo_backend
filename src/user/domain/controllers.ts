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

const deletedUser = async (args: Prisma.UserDeleteArgs) =>
  await prisma.user
    .delete(args)
    .catch(err => raise('User', 'Cannot delete user', err))
    .finally(async () => await prisma.$disconnect())

const updatedUser = async (args: Prisma.UserUpdateArgs) =>
  await prisma.user
    .update(args)
    .catch(err => raise('User', 'Cannot update user', err))
    .finally(async () => await prisma.$disconnect())

export { deletedUser, newUser, updatedUser, user, users }

