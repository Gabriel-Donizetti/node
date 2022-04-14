import { Request, Response } from "express";
import { VoteService } from "../../service/votes/CreateVoteService";

class VoteController {
    async Vote(req: Request, res: Response){
        const { id, token, id_diretor, id_filme } = req.body

        const service = new VoteService()
        
        try {
            const result = await service.execute(id, token, id_diretor, id_filme)
            
            return res.json(result)
        } catch (error) {
            return res.status(400).json({message: 'Vote already exist'})
        }

    }
}

export { VoteController }