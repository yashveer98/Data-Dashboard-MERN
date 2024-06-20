import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        const connected = await mongoose.connect(process.env.MongoDb_Api);
        if (!connected) throw Error
        console.log('connected to db')
    }
    catch (error) {
        console.log(error)
    }
}