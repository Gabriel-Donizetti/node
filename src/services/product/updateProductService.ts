import prismaClient from "../../prisma";


class UpdateProductService {
    async execute(name: string, price: number, category: string, id: string ){

        const product = prismaClient.product.update({
            where:{
                id
            },
            data:{
                product_category: category,
                name,
                price
            }

        })

        return product
        
    }
}

export { UpdateProductService }