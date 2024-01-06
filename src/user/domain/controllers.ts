import prisma from '@db/connection'
import type { Prisma, User } from '@prisma/client'
import { raise } from '@shared/helpers/errors'

/**
 * @name newUser
 * @kind controller
 * @description This method is used to create a new user in the database in function of the arguments passed.
 *
 * @remarks This method is used to create a new user in the database and should be used only with the `Prisma.UserCreateArgs` type from Prisma.
 *
 * @param {UserCreateArgs} args - The data to create a new user as `UserCreateArgs` from Prisma.
 * @returns A promise with the user created as `Promise<User>` from Prisma.
 * @throws {Error} If cannot create user.
 *
 * @example newUser({ data: { ...UserData } }) // Create a new user
 */
const newUser = async (args: Prisma.UserCreateArgs): Promise<User> =>
  await prisma.user
    .create(args)
    .catch(err => raise('User', 'Cannot create user', err))
    .finally(async () => await prisma.$disconnect())

/**
 * @name users
 * @kind controller
 * @description This method is used to find many users in the database in function of the arguments passed.
 *
 * @remarks This method is used to find many users and can be reused with different arguments to find different users in the database (see examples below)
 * look at the {@link https://www.prisma.io/docs/orm/reference/prisma-client-reference?query=findMan&page=1#findmany | Prisma.FindManyArgs} documentation for more information on how to use this method.
 *
 * @param {Prisma.UserFindManyArgs} args - The user data from Prisma
 * @returns A promise with a list of users as `Promise<Array<User>>` from Prisma
 * @throws Error('Cannot find users') If cannot find users, using the {@link raise} helper method
 *
 * @see {@link https://www.prisma.io/docs/orm/reference/prisma-client-reference?query=findMan&page=1#findmany | Prisma.FindManyArgs}
 * @see {@link raise}
 * @see {@link User}
 *
 * @example users({ where: { name: 'John' } }) // Find all users named John
 * @example users({ where: { role: 'ADMIN' } }) // Find all users with role ADMIN
 */
const users = async (args: Prisma.UserFindManyArgs): Promise<Array<User>> =>
  await prisma.user
    .findMany(args)
    .catch(err => raise('User', 'Cannot find users', err))
    .finally(async () => await prisma.$disconnect())

/**
 * Find one user
 *
 * @param args - The user data as UserFindUniqueArgs from Prisma
 * @returns A promise with the user found as `Promise<User>` from Prisma
 * @throws {Error} If cannot find user
 *
 * @example user({ where: { id: 1 } }) // Find user with id 1
 * @example user({ where: { email: {startsWith: 'john'} } }) // Find user with email starting with john
 */
const user = async (args: Prisma.UserFindUniqueArgs): Promise<User | null> =>
  await prisma.user
    .findUnique(args)
    .catch(err => raise('User', 'Cannot find user', err))
    .finally(async () => await prisma.$disconnect())

/**
 * Delete one user
 *
 * @param args - The user data as UserDeleteArgs from Prisma
 * @returns A promise with the user deleted as `Promise<User>` from Prisma
 * @throws {Error} If cannot delete user
 *
 * @example deletedUser({ where: { id: 1 } }) // Delete user with id 1
 * @example deletedUser({ where: { email: {startsWith: 'john'} } }) // Delete user with email starting with john
 */
const deletedUser = async (args: Prisma.UserDeleteArgs): Promise<User> =>
  await prisma.user
    .delete(args)
    .catch(err => raise('User', 'Cannot delete user', err))
    .finally(async () => await prisma.$disconnect())

/**
 * Update one user
 *
 * @param args - The user data as UserUpdateArgs from Prisma
 * @returns A promise with the user updated as `Promise<User>` from Prisma
 * @throws {Error} If cannot update user
 *
 * @example updatedUser({ where: { id: 1 }, data: { name: 'John' } }) // Update user with id 1
 * @example updatedUser({ where: { email: {startsWith: 'john'} }, data: { name: 'John' } }) // Update user with email starting with john
 *
 */
const updatedUser = async (args: Prisma.UserUpdateArgs): Promise<User> =>
  await prisma.user
    .update(args)
    .catch(err => raise('User', 'Cannot update user', err))
    .finally(async () => await prisma.$disconnect())

export { deletedUser, newUser, updatedUser, user, users }

