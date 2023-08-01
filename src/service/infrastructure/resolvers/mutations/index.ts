import { createService } from '../../../application/useCases/index.ts'

const Mutation = {
  createService: async (_, args) => await createService(args.input)
}

export default Mutation
