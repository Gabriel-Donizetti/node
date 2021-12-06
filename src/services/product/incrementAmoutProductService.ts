import prismaClient from "../../prisma";


class IncrementProductAmoutService {
    async execute(new_amout: number, id: string ){

        const product = prismaClient.product.update({
            where:{
                id
            },
            data:{
                amout:{
                    increment: new_amout
                }
            }

        })

        return product
        
    }
}

export { IncrementProductAmoutService }