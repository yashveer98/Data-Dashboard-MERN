import express from 'express'
import router from './router/index.js'
import cors from 'cors'
import 'dotenv/config'
import { connectToDb } from './monogDb/lib/connectDb.js'
//import { seedData } from './monogDb/lib/seedData.js'
const app = express()

const port = 3000 || process.env.PORT
connectToDb()
//seedData()
app.use(cors())

app.use('/api/filter', router)
app.get('/', (req, res) => {
    res.send('this is home')
})
app.listen(port, () => {
    console.log('port is listening on port 3000')
})