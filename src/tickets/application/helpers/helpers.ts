import { Ticket } from '@prisma/client'
import { raise } from '../../../shared/helpers/errors.ts'
import { ticket } from '../../domain/controllers.ts'
import type { TicketData } from '../../types/core/types.ts'

/**
 * Find a ticket by id
 *
 * @param id - the id of the ticket
 * @throws {Error} - if the ticket is not found
 * @returns The ticket found
 */

const findTicketById = async (id: string) => {
  const currentTicket: Ticket | null = await ticket({
    where: { id },
    include: {
      services: {
        select: {
          id: true
        }
      },
      editors: {
        select: {
          id: true
        }
      }
    }
  })

  if (!currentTicket) {
    raise('Error', 'Ticket not found')
  }

  return currentTicket as TicketData
}

export { findTicketById }
