import type { Prisma } from '@prisma/client'
import prisma from '../../db/connection.ts'

const rs = async (args: Prisma.RsFindUniqueArgs) => await prisma.rs.findUnique(args)

export { rs }
