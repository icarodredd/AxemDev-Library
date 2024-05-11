import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri);
const connectDatabase = async () => {
    try {
        await client.connect();
        console.log("Database connected!");
        return client;
    }
    catch (error) {
        console.log(error);
    }
};
const disconnectDatabase = async () => {
    try {
        client.close();
        console.log("Database disconnected!");
    }
    catch (error) {
        console.error(error);
    }
};
export { connectDatabase, disconnectDatabase };
