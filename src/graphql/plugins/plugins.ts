import { ApolloServerPlugin } from '@apollo/server'

const plugins: ApolloServerPlugin[] = [
  {
    serverWillStart: async () => {
      console.info('Server starting up!')
    }
  }
  // {
  //   requestDidStart: async ({ request }) => {
  //     const token = request?.http?.headers.get('authorization') ?? ''

  //     if (!token) {
  //       return
  //     }

  //     const currentUser = await user({ where: { id: token } })

  //     if (!currentUser) {
  //       return
  //     }

  //     return {}
  //   }
  // },
]

export default plugins
