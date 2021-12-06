import prismaClient from "../../prisma";


class GetProductByCategoryService {
    async execute(category: string){
        const product = await prismaClient.product.findMany({
            where:{
                product_category: category
            }
        })

        return product
    }
}

export { GetProductByCategoryService }