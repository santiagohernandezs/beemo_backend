import { grantUser } from '@shared/helpers/auth'
import { Context } from '@shared/types/graphql/types'
import { DeleteTicketInput } from '@tickets/types/graphql/types'

const middlewares = {
  Mutation: {
    deleteTicket: async (
      resolve,
      parent,
      args: DeleteTicketInput,
      context: Context,
      info
    ) => {
      const { token } = context

      await grantUser(token, 'ADMIN')

      const result = await resolve(parent, args, context, info)

      return result
    }
  }
}

export default middlewares
