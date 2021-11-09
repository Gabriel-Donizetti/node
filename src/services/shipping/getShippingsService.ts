import prismaClient from "../../prisma";

class GetShippingService {
    async execute(){
        const shippings = await prismaClient.shipping.findMany({
           take: 1000
        })

        return shippings

    }
}

export { GetShippingService }