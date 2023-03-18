import express from "express"
import "express-async-errors"
import {Request, Response} from "express"
import cors from "cors"
import router from "./routers/routers.js"

const app = express()

app.use(cors(), express.json())
app.use(router)

app.get('/', (req: Request, res: Response) => {
    return res.status(200).send('ok')
})

export default app