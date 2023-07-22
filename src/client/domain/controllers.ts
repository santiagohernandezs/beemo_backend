import type { Prisma } from '@prisma/client'
import prisma from '../../db/connection.ts'

const newClient = async (args: Prisma.ClientCreateArgs) => {
  return await prisma.client.create(args)
}

const deletedClient = async (args: Prisma.ClientDeleteArgs) => {
  return await prisma.client.delete(args)
}

const updatedClient = async (args: Prisma.ClientUpdateArgs) => {
  return await prisma.client.update(args)
}

const clients = async (args: Prisma.ClientFindManyArgs) => {
  return await prisma.client.findMany(args)
}

const clientById = async (args: Prisma.ClientFindUniqueArgs) => {
  return await prisma.client.findUnique(args)
}

export { newClient, clients, clientById, deletedClient, updatedClient }
