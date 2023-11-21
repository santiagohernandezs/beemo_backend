import { PrismaClient } from '@prisma/client'
import { clients, cordinates, departments, radioStations, roles, services, users } from './data'
const prisma = new PrismaClient()

;(async () => {
  for (const cordinate of cordinates) {
    await prisma.coordinates.create({ data: cordinate })
  }

  for (const radioStation of radioStations) {
    await prisma.radioStation.create({ data: radioStation })
  }

  for (const client of clients) {
    await prisma.client.create({ data: client })
  }

  for (const service of services) {
    await prisma.service.create({ data: service })
  }

  for (const role of roles) {
    await prisma.role.create({ data: role })
  }

  for (const department of departments) {
    await prisma.department.create({ data: department })
  }

  for (const user of users) {
    await prisma.user.create({ data: user })
  }
})()
  .then(async () => await prisma.$disconnect())
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
