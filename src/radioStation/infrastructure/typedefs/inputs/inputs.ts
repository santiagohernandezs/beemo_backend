import gql from 'graphql-tag'

const input = gql`
  input FindRsByIdInput {
    id: String!
  }
`

export default input
