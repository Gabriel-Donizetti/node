import prismaClient from "../prisma";

class GetUserService {
    async execute(name: string){
        const user = await prismaClient.user.findFirst({
            where:{
                name
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

export { GetUserService }