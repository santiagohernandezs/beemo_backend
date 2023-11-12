import gql from 'graphql-tag'

const inputs = gql`
  "Input para crear un usuario."
  input CreateUserInput {
    name: String!
    lastname: String!
    email: String!
    password: String!
    role: Role!
    departmentName: Department!
  }

  "Input para buscar un usuario por su ID."
  input FindUserById {
    id: String!
  }

  "Input para eliminar un usuario por su ID."
  input RemoveUserInput {
    id: String!
  }

  "Input para iniciar sesión de un usuario."
  input LoginUserInput {
    email: String!
    password: String!
  }
`

export default inputs
