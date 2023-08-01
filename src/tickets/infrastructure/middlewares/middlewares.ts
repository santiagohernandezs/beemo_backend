import { grantUser } from '../../../shared/helpers/auth.ts'
import { Context } from '../../../shared/types/graphql/types.ts'
import { DeleteTicketInput } from '../../types/graphql/types.ts'

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
