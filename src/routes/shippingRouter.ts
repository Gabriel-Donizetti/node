import { Router } from 'express'
import { CreateShippingController } from '../controller/shipping/createShippingController'

export const shippingRouter:Router = Router()

shippingRouter.post('/create', new CreateShippingController().handle)
