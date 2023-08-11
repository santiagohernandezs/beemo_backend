import prisma from '@db/connection'
import type { Prisma } from '@prisma/client'
import { raise } from '@shared/helpers/errors'

const tickets = async (args: Prisma.TicketFindManyArgs) =>
  await prisma.ticket
    .findMany(args)
    .catch(err => raise('Ticket', 'Cannot find tickets', err))
    .finally(async () => await prisma.$disconnect())

const newTicket = async (args: Prisma.TicketCreateArgs) =>
  await prisma.ticket
    .create(args)
    .catch(err => raise('Ticket', 'Cannot create ticket', err))
    .finally(async () => await prisma.$disconnect())

const ticket = async (args: Prisma.TicketFindUniqueArgs) =>
  await prisma.ticket
    .findUnique(args)
    .catch(err => raise('Ticket', 'Cannot find ticket', err))
    .finally(async () => await prisma.$disconnect())

const deleteTicket = async (args: Prisma.TicketDeleteArgs) =>
  await prisma.ticket
    .delete(args)
    .catch(err => raise('Ticket', 'Cannot delete ticket', err))
    .finally(async () => await prisma.$disconnect())

const updateTicket = async (args: Prisma.TicketUpdateArgs) =>
  await prisma.ticket
    .update(args)
    .catch(err => raise('Ticket', 'Cannot update ticket', err))
    .finally(async () => await prisma.$disconnect())

export { deleteTicket, newTicket, ticket, tickets, updateTicket }
