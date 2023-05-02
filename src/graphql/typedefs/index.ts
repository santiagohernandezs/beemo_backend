import gql from 'graphql-tag'
import userDef from '../../user/domain/typedefs/index.ts'

const typeDefs = gql`
  ${userDef}
`

export default typeDefs
