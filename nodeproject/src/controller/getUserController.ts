import { Request, Response } from "express";
import { GetUserService } from "../service/getUserService";

class GetUserController {
    async handle(req: Request, res: Response){
        const { name } = req.body

        const service = new GetUserService()

        try {
            const result = await service.execute(name)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'User not found'})
        }
    }
}

export { GetUserController }
