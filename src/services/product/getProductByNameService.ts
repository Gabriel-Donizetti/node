import prismaClient from "../../prisma";


class GetProductByNameService {
    async execute(name: string){
        const product = await prismaClient.product.findMany({
            where:{
                name: name
            }
        })

        return product
    }
}

export { GetProductByNameService }