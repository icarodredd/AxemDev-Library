import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri);
const connectDatabase = async () => {
    console.log(uri);
    try {
        const con = await client.connect();
        console.log("Database connected!");
        console.log(con);
    }
    catch (error) {
        console.log(error);
    }
};
const disconnectDatabase = async (con) => {
    try {
        con.close();
        console.log("Database disconnected!");
    }
    catch (error) {
        console.error(error);
    }
};
export { connectDatabase, disconnectDatabase };
