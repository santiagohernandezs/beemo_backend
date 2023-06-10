import prisma from '../../db/connection.ts'

const newUser = async args => {
  return await prisma.user.create({
    data: {
      ...args.input
    }
  })
}

const users = async () => {
  return await prisma.user.findMany({
    include: {
      tickets: true
    }
  })
}

const userById = async id => {
  return await prisma.user.findUnique({
    where: {
      id
    }
  })
}

export { newUser, userById, users }
