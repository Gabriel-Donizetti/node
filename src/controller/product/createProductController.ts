import { Request, Response } from 'express'
import { param } from 'express-validator';
import { CreateProductService } from '../../services/product/createProductService'

const { validationResult } = require('express-validator');


const myValidationResult = validationResult.withDefaults({
    formatter: error => {
      return {
        msg: error.msg,
        param: error.param
      };
    },
  });

class CreateProductController {
    async handle(req: Request, res: Response) {

        const errors = myValidationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { name, price, category, amout } = req.body

        const service = new CreateProductService()

        const result = await service.execute(name, price, category, amout)

        return res.json(result)
    }
}

export { CreateProductController }