import express from "express";
import { router } from "../controllers/courseController.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use("/courses", router);

app.listen(process.env.PORT);
