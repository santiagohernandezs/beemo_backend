// import { User } from '@prisma/client'
// import { Context } from '@shared/types/graphql/types'
// import { user } from '@user/domain/controllers'

const middlewares = {
  Query: {
    // users: async (resolve, parent, args, context: Context, info) => {
    //   const { currentUser } = context
    //   const USER = (await user({ where: { id: currentUser.id } })) as User
    //   //* The roles that can access this query
    //   const allowedRoles = ['ADMIN']
    //   if (!allowedRoles.includes(USER.role)) throw new Error('Not authorized')
    //   const result = resolve(parent, args, context, info)
    //   return result
    // }
  }
}

export default middlewares
