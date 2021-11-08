import { Request, Response } from 'express'
import { validationResult } from 'express-validator';
import { CreateShippingService } from '../../services/shipping/createShippingService';

const myValidationResult = validationResult.withDefaults({
    formatter: error => {
      return {
        msg: error.msg,
        param: error.param
      };
    },
  });

class CreateShippingController {
    async handle(req: Request, res: Response){

        const errors = myValidationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { amout, product_id } = req.body

        const service = new CreateShippingService()

        try {
            const result = await service.execute(amout, product_id)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: ''})
        }
    }
}

export { CreateShippingController }