import { Request, Response } from 'express'
import { DeleteCategoryService } from '../../services/product/deleteProductCategoryService'

class DeleteCategoryController {
    async handle(req: Request, res: Response){
        const { category } = req.query

        const service = new DeleteCategoryService()

        const result = await service.execute(String(category))

        return res.json(result)
    }
}

export { DeleteCategoryController }