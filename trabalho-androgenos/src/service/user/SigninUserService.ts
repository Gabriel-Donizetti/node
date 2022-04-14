import { prismaClient } from "../../prisma"

class SigninUserService {
    async execute(name: string, email: string, password: string) {
        const user = await prismaClient.user.create({
            data:{
                name,
                email,
                password
            },
            select:{
                name:true,
                email: true,
                id: true
            } 
        })

        return user
    }
}

export { SigninUserService }