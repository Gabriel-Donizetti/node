import { Request, Response } from 'express'
import { validationResult } from 'express-validator';
import { UpdateProductService } from '../../services/product/updateProductService'

const myValidationResult = validationResult.withDefaults({
    formatter: error => {
      return {
        msg: error.msg,
        param: error.param
      };
    },
  });

class UpdateProductController {
    async handle(req: Request, res: Response){

        const errors = myValidationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { name, price, category, id } = req.body

        const service = new UpdateProductService()

        const result = await service.execute(name, price, category, String(id))

        return res.json(result)
    }
}

export { UpdateProductController }