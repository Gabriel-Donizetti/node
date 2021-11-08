import prismaClient from "../../prisma";

class CreateShippingService {
    async execute(amout: number, product_id: string ){
        const shipping = await prismaClient.shipping.create({
            data:{
                product_amout:amout,
                products:{
                    connect:{
                        id: product_id
                    }
                }
            },
            include:{
                products: true,
            }
        })

        return shipping

    }
}

export { CreateShippingService }