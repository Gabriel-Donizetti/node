import prismaClient from "../../prisma";


class GetUserService {
    async execute(id: string){
        const user = await prismaClient.user.findUnique({
            where:{
                id
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