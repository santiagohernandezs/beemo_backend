import prisma from '../../db/connection.ts'

const services = async () => {
  return await prisma.service.findMany()
}

const newService = async args => {
  return await prisma.service.create({
    data: {
      ...args.input
    }
  })
}

export { services, newService }
