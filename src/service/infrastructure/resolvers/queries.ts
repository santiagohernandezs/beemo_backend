import { getServices } from '@service/application/useCases'

const Query = {
  services: async () => await getServices()
}

export default Query
