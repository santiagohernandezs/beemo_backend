import gql from 'graphql-tag'

const querys = gql`
  # Definición del tipo Query.
  type Query {
    "Consulta para obtener todos los usuarios."
    users: [User]
    "Consulta para obtener un usuario por su ID."
    userById(input: FindUserById): User
  }
`

export default querys