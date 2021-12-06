import prismaClient from "../../prisma";


class UpdateUserService {
    async execute(id: string, name: string, email: string ){

        const product = prismaClient.user.update({
            where:{
                id
            },
            data:{
               name,
               email
            },
            select:{
                name: true,
                email: true
            }

        })

        return product
        
    }
}

export { UpdateUserService }