import { json } from "express";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";

class LoginUserService {
    async execute(email:string, password:string){
      
         const user = await prismaClient.user.findUnique({
             where:{
                 email
             },
             select:{
                 id:true,
                 name:true,
                 email:true
             }
         })
        
         const token = sign({
             user:{
                 id: user.id,
                 email: user.email
             }
         },process.env.JWT_SECRET,
         {
             subject: user.id,
             expiresIn: '1d'
         }
         )

         return {token, user}

    }
}

export { LoginUserService }