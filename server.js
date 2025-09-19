import express from 'express'
import { connectDB } from './db/connection.js'
import { router } from './routes/notes.js'

const app = express()

connectDB()

app.use(express.json());
app.use('/notes', router)

app.listen(3000, () => {
    console.log('server is up')
})

