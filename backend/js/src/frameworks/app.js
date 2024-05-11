import express from "express";
import { router } from "../controllers/courseController.js";
const app = express();
app.use(express.json());
app.use("/courses", router);
app.listen(process.env.PORT);
