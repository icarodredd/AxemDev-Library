import express from "express";
import { router } from "../controllers/courseController.js";
import cors from "cors";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());
app.use("/courses", router);

app.listen(process.env.PORT);
