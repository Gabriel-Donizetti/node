import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string
}

export function userAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).json({errorCode: 'invalid token'})
    }

    //Bearer 123123123jhkjh2jh432423
    //[0] Bearer
    //[1] token
    const [, token] = authToken.split(' ')

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload
        return next()
    } catch (error) {
        return res.status(401).json({errorCode: 'invalid token'})
    }
}