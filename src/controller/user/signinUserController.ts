import { Request, Response } from 'express'
import { validationResult } from 'express-validator';
import { SignInUserService } from '../../services/user/signinUserService'

const myValidationResult = validationResult.withDefaults({
    formatter: error => {
      return {
        msg: error.msg,
        param: error.param
      };
    },
  });

class SignInUserController {
    async handle(req: Request, res: Response){

        const errors = myValidationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body

        const service = new SignInUserService()

        try {
            const result = await service.execute(name, email, password)

            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'User already exist'})
        }
    }
}

export { SignInUserController }