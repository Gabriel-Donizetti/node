import prismaClient from "../../prisma";


class GetCategorysService {
    async execute(){
        const categorys = await prismaClient.category.findMany({
            take: 1000
        })

        return categorys
    }
}

export { GetCategorysService }