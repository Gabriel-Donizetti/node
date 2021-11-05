import { Request, Response } from 'express'
import { validationResult } from 'express-validator';
import { DecrementProductAmoutService } from '../../services/product/decrementProductAmoutService'

const myValidationResult = validationResult.withDefaults({
    formatter: error => {
      return {
        msg: error.msg,
        param: error.param
      };
    },
  });

class DecrementProductAmoutController {
    async handle(req: Request, res: Response){

        const errors = myValidationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { id, amout } = req.body

        const service = new DecrementProductAmoutService()

        const result = await service.execute(amout, String(id))

        return res.json(result)
    }
}

export { DecrementProductAmoutController }