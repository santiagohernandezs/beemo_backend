import { getRs } from '../../../application/useCases/useCases.ts'

type FindRsByIdInput = {
  input: {
    id: string
  }
}

const Query = {
  rs: async (_, args: FindRsByIdInput) => await getRs(args.input.id)
}

export default Query
