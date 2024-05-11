import express from "express";
import { connectDatabase, } from "../frameworks/database/config.js";
const router = express.Router();
router.get("/getall", async (req, res) => {
    await connectDatabase();
});
export { router };
