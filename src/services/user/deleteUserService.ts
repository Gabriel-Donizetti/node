import prismaClient from "../../prisma";


class DeleteUserService {
    async execute(id: string){
        const user = await prismaClient.user.delete({
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

export { DeleteUserService }