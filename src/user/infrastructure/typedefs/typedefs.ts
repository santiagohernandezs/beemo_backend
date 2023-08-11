import gql from 'graphql-tag'
import inputs from './inputs/inputs'
import mutations from './mutations/mutations'
import querys from './queries/queries'

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
    name: String!
    lastname: String!
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

  ${querys}
  ${mutations}
`

export default typeDefs
