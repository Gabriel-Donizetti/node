import prismaClient from "../../prisma";

class SignInUserService {
    async execute(name:string, email:string, password:string){
        const user = await prismaClient.user.create({
            data:{
                name,
                email,
                password
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return user

    }
}

export { SignInUserService }