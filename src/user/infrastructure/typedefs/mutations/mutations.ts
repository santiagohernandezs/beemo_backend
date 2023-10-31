import gql from 'graphql-tag'
import inputs from '../inputs/inputs'

const mutations = gql`
  ${inputs}

  type Mutation {
    createUser(input: CreateUserInput!): User
    loginUser(input: LoginUserInput!): Token
    removeUser(input: RemoveUserInput!): User
  }
`

export default mutations
