import { Router } from 'express'
import { DeleteUserController } from '../controller/user/deleteUserController'
import { GetUserController } from '../controller/user/getUserController'
import { LoginUserController } from '../controller/user/loginUserController'
import { SignInUserController } from '../controller/user/signinUserController'
import { UpdateUserController } from '../controller/user/updateUserController'
import { userAuthenticated } from '../middleware/userAuthenticated'
import { loginValidation, signinValidation, updateUserValidation } from './userHandleValidation'

export const userRouter:Router = Router()

userRouter.post('/signin',signinValidation(), new SignInUserController().handle)
userRouter.post('/login',loginValidation(), new LoginUserController().handle)
userRouter.get('/getuser', new GetUserController().handle)
userRouter.put('/updateuser', updateUserValidation() , userAuthenticated, new UpdateUserController().handle)
userRouter.delete('/deleteuser', new DeleteUserController().handle)