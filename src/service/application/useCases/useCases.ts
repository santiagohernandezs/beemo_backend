import { newService, services } from '@service/domain/controllers'

const getServices = async () => {
  return await services({
    include: {
      rs: {
        include: {
          coordinates: true,
          services: true
        }
      }
    }
  })
}

const createService = async args => {
  return await newService(args)
}

export { createService, getServices }
