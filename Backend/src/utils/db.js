import mongoose from "mongoose";

const connectDb = async () =>
{
    try
    {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("db connect successfully");
    } catch (error)
    {
        console.log("MongoDb Error", error)
    }
}

export default connectDb;