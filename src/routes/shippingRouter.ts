import { Router } from 'express'
import { CreateShippingController } from '../controller/shipping/createShippingController'
import { GetShippingController } from '../controller/shipping/getShippingsController'

export const shippingRouter:Router = Router()

shippingRouter.post('/create', new CreateShippingController().handle)
shippingRouter.get('/getshippings', new GetShippingController().handle )
