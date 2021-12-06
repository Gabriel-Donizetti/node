import { Request, Response } from 'express'
import { GetProductByCategoryService } from '../../services/product/getProductByCategoryService'

class GetProductByCategoryController {
    async handle(req: Request, res: Response){
        const { category } = req.query

        const service = new GetProductByCategoryService()

        const result = await service.execute(String(category))

        return res.json(result)
    }
}

export { GetProductByCategoryController }