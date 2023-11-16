import prisma from '@db/connection'
import type { Prisma } from '@prisma/client'
import { raise } from '@shared/helpers/errors'

/**
 * Find many tickets
 *
 * @param args - The ticket data as TicketFindManyArgs from Prisma 
 * @returns A list of tickets as Ticket[] from Prisma
 * @throws {Error} If cannot find tickets
 *
 * @example tickets({ where: { author: { id: '1'}}}) // Find all tickets created by user with id 1
 * @example tickets({ where: {status: { equals: 'OPEN'}}}) // Find all tickets with status OPEN
 *
 */
const tickets = async (args: Prisma.TicketFindManyArgs) =>
  await prisma.ticket
    .findMany(args)
    .catch(err => raise('Ticket', 'Cannot find tickets', err))
    .finally(async () => await prisma.$disconnect())

/**
 * Create a new ticket
 * 
 * @param args - The ticket data as TicketCreateArgs from Prisma
 * @returns The ticket created as Ticket from Prisma
 * @throws {Error} If cannot create ticket
 * 
 * @example newTicket({ data: { ...TicketData } }) // Create a new ticket
 * @example newTicket({ data: { ...TicketData, author: { connect: { id: '1' } } } }) // Create a new ticket and connect it to user with id 1
 * 
 */
const newTicket = async (args: Prisma.TicketCreateArgs) =>
  await prisma.ticket
    .create(args)
    .catch(err => raise('Ticket', 'Cannot create ticket', err))
    .finally(async () => await prisma.$disconnect())

/**
 * Find one ticket
 * 
 * @param args - The ticket data as TicketFindUniqueArgs from Prisma
 * @returns The ticket found as Ticket from Prisma
 * @throws {Error} If cannot find ticket
 * 
 * @example ticket({ where: { id: 1 } }) // Find ticket with id 1
 * @example ticket({ where: { title: { startsWith: 'Bug' } } }) // Find ticket with title starting with Bug
 * 
 */
const ticket = async (args: Prisma.TicketFindUniqueArgs) =>
  await prisma.ticket
    .findUnique(args)
    .catch(err => raise('Ticket', 'Cannot find ticket', err))
    .finally(async () => await prisma.$disconnect())

/**
 * Delete one ticket
 * 
 * @param args - The ticket data as TicketDeleteArgs from Prisma
 * @returns The ticket deleted as Ticket from Prisma
 * @throws {Error} If cannot delete ticket
 * 
 * @example deleteTicket({ where: { id: 1 } }) // Delete ticket with id 1
 * @example deleteTicket({ where: { title: { startsWith: 'Bug' } } }) // Delete ticket with title starting with Bug
 * 
 */
const deleteTicket = async (args: Prisma.TicketDeleteArgs) =>
  await prisma.ticket
    .delete(args)
    .catch(err => raise('Ticket', 'Cannot delete ticket', err))
    .finally(async () => await prisma.$disconnect())

/**
 * Update one ticket
 * 
 * @param args - The ticket data as TicketUpdateArgs from Prisma
 * @returns The ticket updated as Ticket from Prisma
 * @throws {Error} If cannot update ticket
 * 
 * @example updateTicket({ where: { id: 1 }, data: { title: 'Bug' } }) // Update ticket with id 1
 * @example updateTicket({ where: { title: { startsWith: 'Bug' } }, data: { title: 'Bug' } }) // Update ticket with title starting with Bug
 * 
 */
const updateTicket = async (args: Prisma.TicketUpdateArgs) =>
  await prisma.ticket
    .update(args)
    .catch(err => raise('Ticket', 'Cannot update ticket', err))
    .finally(async () => await prisma.$disconnect())

export { deleteTicket, newTicket, ticket, tickets, updateTicket }

