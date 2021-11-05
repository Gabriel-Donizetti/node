import { Request, Response } from 'express'
import { validationResult } from 'express-validator';
import { UpdateUserService } from '../../services/user/updateUserService'

const myValidationResult = validationResult.withDefaults({
    formatter: error => {
      return {
        msg: error.msg,
        param: error.param
      };
    },
  });

class UpdateUserController {
    async handle(req: Request, res: Response){

        const errors = myValidationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { id, name, email } = req.body

        const service = new UpdateUserService()

        try {
            const result = await service.execute(String(id),name, email)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'Invalid User'})
        }
    }
}

export { UpdateUserController }