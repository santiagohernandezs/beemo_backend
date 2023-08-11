import { radioStation } from '@radioStation/domain/controllers'

const getRs = async id => await radioStation({ where: { id } })

export { getRs }
