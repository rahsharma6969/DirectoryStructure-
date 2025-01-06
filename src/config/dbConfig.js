import mongoose from 'mongoose';
import { DB_URI } from './serverConfig.js';
import { log } from 'node:console';



export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(DB_URI);
        console.log("Connected to MongoDB");
        
    } catch (error) {
     console.log("Something went wrong in database");
     console.log(error);  
    }
}

