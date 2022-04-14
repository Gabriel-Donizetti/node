import { Request, Response } from "express";
import { LoginUserService } from "../../service/user/LoginUserService";
import { SigninUserService } from "../../service/user/SigninUserService";

class UserController {
    async Signin(req: Request, res: Response){
        const { name, email, password } = req.body

        const service = new SigninUserService()
        
        try {
            const result = await service.execute(name, email, password)
            
            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'User already exist'})
        }

    }

    async Login(req: Request, res: Response){
        const { email, password } = req.body

        const service = new LoginUserService()
        
        try {
            const result = await service.execute(email, password)
            
            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'User not found'})
        }

    }
}

export { UserController }