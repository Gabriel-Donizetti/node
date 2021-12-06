import { Request, Response } from 'express'
import { DeleteProductService } from '../../services/product/deleteProductService'


class DeleteProductController {
    async handle(req: Request, res: Response){
        const { id } = req.query

        const service = new DeleteProductService()

        const result = await service.execute(String(id))

        return res.json(result)
    }
}

export { DeleteProductController }