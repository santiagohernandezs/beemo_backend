import { getRs } from '@radioStation/application/useCases/useCases'

type FindRsByIdInput = {
  input: {
    id: string
  }
}

const Query = {
  rs: async (_, args: FindRsByIdInput) => await getRs(args.input.id)
}

export default Query
