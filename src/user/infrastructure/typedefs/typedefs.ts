import gql from 'graphql-tag'
import inputs from './inputs'
import mutations from './mutations'
import queries from './queries'

const typeDefs = gql`
  "Enumeración para los roles de los usuarios."
  enum Role {
    USER
    SUPERUSER
    ADMIN
  }

  "Enumeración para los departamentos de la empresa."
  enum Department {
    IT
    SUPPORT
    NOC
    HR
    FINANCE
    MARKETING
    SALES
    CUSTOMER_SERVICE
  }

  # Importación de las definiciones de los inputs.
  ${inputs}

  "Definición del tipo User."
  type User {
    "Identificador único del usuario."
    id: String!
    "Nombre del usuario."
    firstName: String!
    "Apellido del usuario."
    lastName: String!
    "Correo electrónico del usuario."
    email: String!
    "Contraseña del usuario."
    password: String!
    "Rol del usuario."
    role: Role!
    "Departamento al que pertenece el usuario."
    departmentName: Department!
    "Fecha de creación del usuario."
    createdAt: String!
    "Fecha de actualización del usuario."
    updatedAt: String!
    "Tickets creados por el usuario."
    tickets: [Ticket]
  }

  "Definición del tipo Token."
  type Token {
    "Token de acceso."
    token: String!
  }

  # Importación de las definiciones de las consultas.
  ${queries}

  # Importación de las definiciones de las mutaciones.
  ${mutations}
`

export default typeDefs
