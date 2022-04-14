import { Router } from "express"
import { VoteController } from "../controller/votes/VoteController"

export const votesRouter:Router = Router()

votesRouter.post('/vote', new VoteController().Vote)

