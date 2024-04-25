import dotenv from 'dotenv'
import connectDB from './database/index.js'
import { app } from './app.js'
dotenv.config({ path: './env' })
const port = process.env.PORT || 8000
connectDB()
    .then(() => {
        console.log('DB Coonect success')
        app.listen(port, () => {
            console.log(`App is running on ${port}`)
        })
        app.on('error', (err) => console.log(err))
    })
    .catch((err) => console.log('Db error connection'))
