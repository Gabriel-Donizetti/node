import express, { json } from "express"
import cors from "cors"
import http from "http"
import { router } from "./routes/routes"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', router)

const serverHttp = http.createServer(app)


export { serverHttp }

