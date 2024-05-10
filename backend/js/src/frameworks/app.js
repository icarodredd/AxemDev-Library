import express from "express";
import { router } from "../controllers/courseController.js";
const app = express();
app.use("/", router);
app.listen(8080, () => {
    console.log("working!");
});
