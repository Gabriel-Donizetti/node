import { Router, } from "express"
import { userRouter } from "./userRouter"
import { votesRouter } from "./votesRouter"


const router: Router = Router()

router.use('/user', userRouter)
router.use('/votes', votesRouter)


export { router }