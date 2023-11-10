import { getTickets, getTicketsByRs } from '@tickets/application/useCases'
import { FindTicketByRs } from '@tickets/types/graphql/types'

export const Query = {
  tickets: async () => await getTickets(),
  ticketsByRs: async (_, args: FindTicketByRs) => await getTicketsByRs(args.input.id)
}

export default Query
