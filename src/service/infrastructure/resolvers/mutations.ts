import { createService } from '@service/application/useCases'

const Mutation = {
  createService: async (_, args) => await createService(args.input)
}

export default Mutation
