import { getTickets } from '../../../application/useCases/index.ts'

export const Query = {
  tickets: async () => getTickets()
}

export default Query
