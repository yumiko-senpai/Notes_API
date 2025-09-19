import mongoose from 'mongoose'
import dotenv from  'dotenv'
dotenv.config()

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('connected to db')
    }
    catch (err){
        console.error('connection failed', err.message)
    }
}

