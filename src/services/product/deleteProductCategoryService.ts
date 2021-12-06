import prismaClient from "../../prisma";


class DeleteCategoryService {
    async execute(category: string ){
        const product = prismaClient.category.delete({
            where:{
                category,
            }
        })
       
        return product
    }
}

export { DeleteCategoryService }