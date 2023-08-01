import { rs } from '../../domain/controllers.ts'

const getRs = async id => await rs({ where: { id } })

export { getRs }
