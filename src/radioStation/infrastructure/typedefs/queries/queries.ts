import gql from 'graphql-tag'

const querys = gql`
  type Query {
    rs(input: FindRsByIdInput): Rs!
  }
`

export default querys
