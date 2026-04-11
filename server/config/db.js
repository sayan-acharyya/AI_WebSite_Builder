import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to DB');

    } catch (error) {
        console.log('error in connected to DB');

    }
}

export default connectDb;