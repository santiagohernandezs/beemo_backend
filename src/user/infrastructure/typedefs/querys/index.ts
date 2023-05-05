import gql from 'graphql-tag'

const querys = gql`
  type Query {
    users: [User]
  }
`

export default querys
