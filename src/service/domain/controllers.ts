import prisma from '@db/connection'
import type { Prisma } from '@prisma/client'
import { raise } from '@shared/helpers/errors'

const services = async (args: Prisma.ServiceFindManyArgs) =>
  await prisma.service
    .findMany(args)
    .catch(err => raise('Service', 'Cannot find services', err))
    .finally(async () => await prisma.$disconnect())

const newService = async (args: Prisma.ServiceCreateArgs) =>
  await prisma.service
    .create(args)
    .catch(err => raise('Service', 'Cannot create service', err))
    .finally(async () => await prisma.$disconnect())

export { newService, services }
