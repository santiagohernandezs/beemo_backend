import gql from 'graphql-tag'
import inputs from './inputs'
import mutations from './mutations'
import queries from './queries'

const typeDefs = gql`
  enum Role {
    USER
    SUPERUSER
    ADMIN
  }

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

  ${inputs}

  type User {
    id: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role: Role!
    departmentName: Department!
    createdAt: String!
    updatedAt: String!
    tickets: [Ticket]
  }

  type Token {
    token: String!
  }

  ${queries}
  ${mutations}
`

export default typeDefs
