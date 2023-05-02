import gql from 'graphql-tag'

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

  type User {
    id: String!
    name: String!
    lastname: String!
    email: String!
    password: String!
    role: Role!
    department: Department!
    createdAt: String!
    updatedAt: String!
    tickets: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(
      name: String
      lastname: String
      email: String
      password: String
      role: Role
      department: Department
    ): User
  }
`

export default typeDefs
