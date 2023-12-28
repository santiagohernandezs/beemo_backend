import gql from 'graphql-tag'

const inputs = gql`
  "Input para crear un usuario."
  input CreateUserInput {
    "Nombre del usuario."
    name: String!
    "Apellido del usuario."
    lastname: String!
    "Email del usuario."
    email: String!
    "Contraseña del usuario."
    password: String!
    "Rol del usuario."
    role: Role!
    "Departamento del usuario."
    departmentName: Department!
  }

  "Input para buscar un usuario por su ID."
  input FindUserById {
    "ID del usuario."
    id: String!
  }

  "Input para eliminar un usuario por su ID."
  input RemoveUserInput {
    "ID del usuario."
    id: String!
  }

  "Input para iniciar sesión de un usuario."
  input LoginUserInput {
    "Email del usuario."
    email: String!
    "Contraseña del usuario."
    password: String!
  }
`

export default inputs
