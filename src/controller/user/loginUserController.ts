import { Request, Response } from 'express'
import { validationResult } from 'express-validator';
import { LoginUserService } from '../../services/user/loginUserService'

const myValidationResult = validationResult.withDefaults({
    formatter: error => {
      return {
        msg: error.msg,
        param: error.param
      };
    },
  });

class LoginUserController {

    async handle(req: Request, res: Response) {

        const errors = myValidationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { email, password } = req.body

        const service = new LoginUserService()

        try {
            const result = await service.execute(email, password)

            return res.json(result)   
        } catch (err) {
            return res.status(404).json({message: 'User not found'})
        }

    }
}

export { LoginUserController }