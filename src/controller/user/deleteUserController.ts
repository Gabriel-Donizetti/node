import { Request, Response } from 'express'
import { DeleteUserService } from '../../services/user/deleteUserService'

class DeleteUserController {
    async handle(req: Request, res: Response){
        const { id } = req.query

        const service = new DeleteUserService()

        try {
            const result = await service.execute(String(id))
            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'User not exist'})
        }
    }
}

export { DeleteUserController }