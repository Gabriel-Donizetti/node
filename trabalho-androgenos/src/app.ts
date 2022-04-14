import express, { json } from "express"
import http from "http"
import cors from "cors"
import { router } from "./routes/routes"

const app = express()

app.use(cors())
app.use(json())

app.use('/', router)

const serverHttp = http.createServer(app)

export { serverHttp }
