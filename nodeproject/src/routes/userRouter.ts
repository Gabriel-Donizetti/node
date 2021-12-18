import { Router } from "express"
import { CreateUserController } from "../controller/createUserController"
import { GetUserController } from "../controller/getUserController"

export const userRouter:Router = Router()

userRouter.post('/create', new CreateUserController().handle)
userRouter.get('/getuser', new GetUserController().handle)
userRouter.put('/upduser')
userRouter.delete('dltuser')