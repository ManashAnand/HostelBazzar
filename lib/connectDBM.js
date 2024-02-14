import mongoose from "mongoose"

let isConnected = false

export const connectDB = async () => {
    try {
        if(isConnected){
            console.log("Using connected DB");
            return
        }
    
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true
        console.log("Connected to DB")
        
    } catch (error) {
        console.log(error);
        isConnected = false
    }

}