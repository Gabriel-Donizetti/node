import { Request, Response } from 'express'
import { GetUserService } from '../../services/user/getUserService'

class GetUserController {
    async handle(req: Request, res: Response){
        const { id } = req.query

        const service = new GetUserService()

        try {
            const result = await service.execute(String(id))
            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'User already exist'})
        }
    }
}

export { GetUserController }