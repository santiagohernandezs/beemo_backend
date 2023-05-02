import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createUser = async args => {
  const user = await prisma.user.create({
    data: {
      name: args.name,
      lastname: args.lastname,
      email: args.email,
      password: args.password,
      role: args.role,
      department: args.department
    }
  })
  return user
}

const getUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}

export { createUser, getUsers }
