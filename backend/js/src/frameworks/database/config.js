var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import "dotenv/config";
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://" +
    process.env.DATABASE_USER +
    ":" +
    process.env.DATABASE_PASSWORD +
    "@" +
    process.env.DATABASE_NAME +
    ".yjaismq.mongodb.net/";
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose.connect(mongoDB);
        console.log("database connected.");
    }
    catch (e) {
        console.error(e);
    }
});
const disconnectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose.disconnect();
    }
    catch (e) {
        console.error(e);
    }
});
export { connectDatabase, disconnectDatabase };
