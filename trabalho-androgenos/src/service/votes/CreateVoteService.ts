import { prismaClient } from "../../prisma"

class VoteService {
    async execute(id: string, token: number, id_diretor: number, id_filme: number) {
       const verifyVote = await prismaClient.votes.findFirst({
           where:{
               user_id: id
           },
           rejectOnNotFound: true,
           select:{
               id: true
           }
       })

       const verifyToken = await prismaClient.user.findFirst({
           where:{
               token
           },
           rejectOnNotFound: true
       })

       if(verifyVote.id == id && verifyToken !== null){
           const vote = await prismaClient.votes.create({
               data:{
                   user_id: id,
                   id_diretor,
                   id_filme
               }
           })

           return vote
       }

       return verifyToken
    }
}

export { VoteService }