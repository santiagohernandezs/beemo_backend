import { getTickets, getTicketsByRs } from '../../../application/useCases/index.ts'
import { FindTicketByRs } from '../../../types/graphql/types.ts'

export const Query = {
  tickets: async () => await getTickets(),
  ticketsByRs: async (_, args: FindTicketByRs) => await getTicketsByRs(args.input.id)
}

export default Query
