import gql from 'graphql-tag'
import rsDef from '../../radioStation/infrastructure/typedefs/index.ts'
import serviceDef from '../../service/infrastructure/typedefs/index.ts'
import ticketDef from '../../tickets/infrastructure/typedefs/index.ts'
import userDef from '../../user/infrastructure/typedefs/index.ts'

const typeDefs = gql`
  ${userDef}
  ${ticketDef}
  ${serviceDef}
  ${rsDef}
`

export default typeDefs
