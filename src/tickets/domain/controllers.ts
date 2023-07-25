import type { Prisma } from '@prisma/client'
import prisma from '../../db/connection.ts'

const tickets = async (args: Prisma.TicketFindManyArgs) =>
  await prisma.ticket.findMany(args)

const newTicket = async (args: Prisma.TicketCreateArgs) =>
  await prisma.ticket.create(args)

const ticket = async (args: Prisma.TicketFindUniqueArgs) =>
  await prisma.ticket.findUnique(args)

const deleteTicket = async (args: Prisma.TicketDeleteArgs) =>
  await prisma.ticket.delete(args)

const updateTicket = async (args: Prisma.TicketUpdateArgs) => {
  return await prisma.ticket.update(args)
}

export { deleteTicket, newTicket, ticket, tickets, updateTicket }
