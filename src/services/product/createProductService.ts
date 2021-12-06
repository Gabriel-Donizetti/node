import prismaClient from "../../prisma";


class CreateProductService {
    async execute(name: string, price: number, category: string, amout: number ){

        const product = await prismaClient.product.create({
           data:{
               name,
               price,
               amout,
               category:{
                   connectOrCreate:{
                       create:{
                           category
                       },
                       where:{
                           category
                       }
                   }
               },
           }
        })

        return product
        
    }
}

export { CreateProductService }