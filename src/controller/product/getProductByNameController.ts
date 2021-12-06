import { Request, Response } from 'express'
import { GetProductByNameService } from '../../services/product/getProductByNameService'

class GetProductByNameController {
    async handle(req: Request, res: Response){
        const { name } = req.query

        const service = new GetProductByNameService()

        const result = await service.execute(String(name))

        return res.json(result)
    }
}

export { GetProductByNameController }