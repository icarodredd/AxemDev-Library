import express from "express";
import { router } from "../controllers/courseController.js";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/courses", router);

app.listen(process.env.PORT);
