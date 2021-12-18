import { Request, Response } from "express";
import { CreateUserService } from "../service/createUserService";

class CreateUserController {
    async handle(req: Request, res: Response){
        const { name, email, password } = req.body

        const service = new CreateUserService()
        
        try {
            const result = await service.execute(name, email, password)
            
            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'User already exist'})
        }

    }
}

export { CreateUserController }