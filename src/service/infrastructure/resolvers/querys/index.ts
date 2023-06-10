import { getServices } from '../../../application/useCases/index.ts'

const Query = {
  services: async () => getServices()
}

export default Query
