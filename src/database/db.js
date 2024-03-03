import {config} from "dotenv"
import mongoose  from "mongoose";
config();


export function connectToDatabase() {
    try {
        mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log("Database connection error!")
    }
}
