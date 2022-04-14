import { prismaClient } from "../../prisma"

class LoginUserService {
    async execute(email: string, password: string) {
        const verifyUser = await prismaClient.user.findFirst({
          where:{
              email,
              password
          },
          rejectOnNotFound: true,
          select:{
              id: true
          }
        })

        if(verifyUser){

            var token = Math.floor(Math.random() * (100 - 0 + 1) + 0)

            const user = await prismaClient.user.update({
                where:{
                   id: verifyUser.id
                },
                data:{
                    token: token
                }
            })

            return user
        }

        return verifyUser
    }
}

export { LoginUserService }