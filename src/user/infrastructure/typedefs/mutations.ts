import gql from 'graphql-tag'

const mutations = gql`
  # Definición del tipo Mutation.
  type Mutation {
    "Mutación para crear un usuario"
    createUser(input: CreateUserInput!): User
    "Mutación para iniciar sesión de un usuario"
    loginUser(input: LoginUserInput!): Token
    "Mutación para eliminar un usuario"
    removeUser(input: RemoveUserInput!): User
  }
`

export default mutations
