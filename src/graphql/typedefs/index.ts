import gql from 'graphql-tag'
import serviceDef from '../../service/infrastructure/typedefs/index.ts'
import ticketDef from '../../tickets/infrastructure/typedefs/index.ts'
import userDef from '../../user/infrastructure/typedefs/index.ts'

const typeDefs = gql`
  ${userDef}
  ${ticketDef}
  ${serviceDef}
`

export default typeDefs
