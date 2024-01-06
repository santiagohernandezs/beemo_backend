import { ResolverParams } from '@shared/types/core/types'
import { getTickets, getTicketsByRs } from '@tickets/application/useCases'
import { FindTicketByRs } from '@tickets/types/graphql/types'

/**
 * Objeto Query que define las consultas GraphQL para los tickets.
 *
 * @property {Function} tickets - Función que devuelve todos los tickets.
 * @property {Function} ticketsByRs - Función que devuelve un ticket por su ID.
 */
export const Query: Record<string, ResolverParams> = {
  /**
   * Consulta para obtener todos los tickets.
   *
   * @returns {Promise} Una promesa que se resuelve con la lista de todos los tickets.
   */
  tickets: async () => await getTickets(),
  /**
   * Consulta para obtener un ticket por su ID.
   *
   * @returns {Promise} Una promesa que se resuelve con el ticket encontrado.
   */
  ticketsByRs: async (_, args: FindTicketByRs) => await getTicketsByRs(args.input.id)
}

export default Query
