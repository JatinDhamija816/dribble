import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import Connection from './database/DB.js'
import router from './routes/Route.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/', router)

const Port = process.env.PORT || 5000
app.listen(Port, () => {
    console.log("Server start")
})
Connection()