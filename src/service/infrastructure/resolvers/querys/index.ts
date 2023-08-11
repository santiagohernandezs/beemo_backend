import { getServices } from '@service/application/useCases/useCases'

const Query = {
  services: async () => await getServices()
}

export default Query
