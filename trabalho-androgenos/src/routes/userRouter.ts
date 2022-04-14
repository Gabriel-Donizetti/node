import { Router } from "express"
import { UserController } from "../controller/user/UserController"

export const userRouter:Router = Router()

userRouter.post('/login', new UserController().Login )
userRouter.post('/signin', new UserController().Signin)

