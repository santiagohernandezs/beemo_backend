import gql from 'graphql-tag'
const querys = gql`
  type Query {
    services: [Service!]!
  }
`

export default querys
