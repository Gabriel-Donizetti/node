import prismaClient from "../../prisma";


class DeleteProductService {
    async execute(id: string ){
        const product = prismaClient.product.delete({
            where:{
                id
            }
        })
       
        return product
    }
}

export { DeleteProductService }