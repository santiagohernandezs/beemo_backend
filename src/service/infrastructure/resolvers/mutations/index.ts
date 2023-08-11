import { createService } from '@service/application/useCases/useCases'

const Mutation = {
  createService: async (_, args) => await createService(args.input)
}

export default Mutation
