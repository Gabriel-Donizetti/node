import { Request, Response } from 'express'
import { validationResult } from 'express-validator';
import { GetShippingService } from '../../services/shipping/getShippingsService';

const myValidationResult = validationResult.withDefaults({
    formatter: error => {
      return {
        msg: error.msg,
        param: error.param
      };
    },
  });

class GetShippingController {
    async handle(req: Request, res: Response){

        const errors = myValidationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const service = new GetShippingService()

        try {
            const result = await service.execute()

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'Shippings not found'})
        }
    }
}

export { GetShippingController }