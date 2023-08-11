import prisma from '@db/connection'
import type { Prisma } from '@prisma/client'
import { raise } from '@shared/helpers/errors'

const radioStation = async (args: Prisma.RadioStationFindUniqueArgs) =>
  await prisma.radioStation
    .findUnique(args)
    .catch(err => raise('RadioStation', 'Cannot find radioStation', err))
    .finally(async () => await prisma.$disconnect())

export { radioStation }
