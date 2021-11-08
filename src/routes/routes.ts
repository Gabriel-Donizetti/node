import { Router } from "express";
import { productRouter } from "./productRouter";
import { shippingRouter } from "./shippingRouter";
import { userRouter } from "./userRouter";

const router: Router = Router()

router.use('/product', productRouter)
router.use('/user', userRouter)
router.use('/shipping', shippingRouter)

export { router }