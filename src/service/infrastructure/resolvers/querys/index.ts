import { getServices } from '../../../application/useCases/index.ts'

const Query = {
  services: async () => await getServices()
}

export default Query
