import { Request, Response } from 'express'
import { GetCategorysService } from '../../services/product/getCategorysService'

class GetCategorysController {
    async handle(req: Request, res: Response){

        const service = new GetCategorysService()

        const result = await service.execute()

        return res.json(result)
    }
}

export { GetCategorysController }