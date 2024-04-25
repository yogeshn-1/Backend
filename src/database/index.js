import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
    try {
        const Newconnection = await mongoose.connect(
            `${process.env.MANGODB_URL}/${DB_NAME}`
        )
        console.log('Connected !!! Host:', Newconnection.connection.host)
    } catch (error) {
        console.log('Error in MONGODB : ', error)
        process.exit(1)
    }
}

export default connectDB
