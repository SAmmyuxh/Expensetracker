import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`Mongodb connected on ${connection.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(`${error.message}`.red)
    }
}

export default connectDB