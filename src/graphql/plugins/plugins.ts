import { ApolloServerPlugin } from '@apollo/server'

const plugins: ApolloServerPlugin[] = [
  {
    serverWillStart: async () => {
      console.info('Server starting up!')
    },
    invalidRequestWasReceived: async () => {
      console.info('Invalid request!')
    },
    requestDidStart: async () => {
      console.info('Request starting!')
    },
    startupDidFail: async () => {
      console.info('Server failed to start!')
    }
  }
]

export default plugins
