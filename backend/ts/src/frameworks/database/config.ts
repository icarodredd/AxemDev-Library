import mongoose from "mongoose";
import "dotenv/config";

mongoose.set("strictQuery", false);

const mongoDB =
  "mongodb+srv://" +
  process.env.DATABASE_USER +
  ":" +
  process.env.DATABASE_PASSWORD +
  "@" +
  process.env.DATABASE_NAME +
  ".yjaismq.mongodb.net/";

const connectDatabase = async () => {
  try {
    mongoose.connect(mongoDB);
    console.log("database connected.");
  } catch (e) {
    console.error(e);
  }
};

const disconnectDatabase = async () => {
  try {
    mongoose.disconnect();
  } catch (e) {
    console.error(e);
  }
};

export { connectDatabase, disconnectDatabase };
