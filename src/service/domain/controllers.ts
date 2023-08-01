import type { Prisma } from '@prisma/client'
import prisma from '../../db/connection.ts'

const services = async (args?: Prisma.ServiceFindManyArgs) => {
  return await prisma.service.findMany(args)
}

const newService = async args => {
  return await prisma.service.create({
    data: {
      ...args.input
    }
  })
}

export { newService, services }
