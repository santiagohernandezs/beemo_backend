import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const newUser = async args => {
  return await prisma.user.create({
    data: {
      ...args.input
    }
  })
}

const users = async () => {
  return await prisma.user.findMany()
}

const userById = async id => {
  return await prisma.user.findUnique({
    where: {
      id
    }
  })
}

export { newUser, users, userById }
