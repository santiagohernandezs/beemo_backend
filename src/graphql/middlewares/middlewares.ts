import ticketMiddlewares from '../../tickets/infrastructure/middlewares/middlewares.ts'
import userMiddlewares from '../../user/infrastructure/middlewares/middlewares.ts'

const middlewares = [userMiddlewares, ticketMiddlewares]

export default middlewares
