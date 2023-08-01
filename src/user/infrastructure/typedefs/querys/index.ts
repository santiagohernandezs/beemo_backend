import gql from 'graphql-tag'

const querys = gql`
  type Query {
    users: [User]
    userById(input: FindUserById): User
  }
`

export default querys
