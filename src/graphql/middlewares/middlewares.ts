import ticketMiddlewares from '@tickets/infrastructure/middlewares/middlewares'
import userMiddlewares from '@user/infrastructure/middlewares/middlewares'

const middlewares = [userMiddlewares, ticketMiddlewares]

export default middlewares
