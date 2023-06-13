import gql from 'graphql-tag'
import inputs from './inputs/index.ts'
import mutations from './mutations/index.ts'
import querys from './querys/index.ts'

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
  ${querys}
  ${mutations}
`

export default typeDefs
