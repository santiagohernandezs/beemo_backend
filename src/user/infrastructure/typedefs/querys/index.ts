import gql from 'graphql-tag'

const querys = gql`
  type Query {
    users: [User]
    userById(id: String!): User
  }
`

export default querys
