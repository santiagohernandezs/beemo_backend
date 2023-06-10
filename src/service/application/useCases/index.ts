import { newService, services } from '../../domain/controllers.ts'

const getServices = async () => {
  return await services()
}

const createService = async args => {
  return await newService(args)
}

export { getServices, createService }
