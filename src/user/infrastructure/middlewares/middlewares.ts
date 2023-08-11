const middlewares = {
  Query: {
    users: async (resolve, parent, args, context, info) => {
      const result = await resolve(parent, args, context, info)

      const userUpper = result.map(user => {
        return {
          ...user,
          name: user.name.toUpperCase()
        }
      })

      return userUpper
    },
    userById: async (resolve, parent, args, context, info) => {
      return await resolve(parent, args, context, info)
    }
  }
}

export default middlewares
