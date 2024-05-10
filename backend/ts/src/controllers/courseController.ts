import express from "express";
import { getAllCourses } from "../useCases/getAllCoursesUseCase.js";
import { connectDatabase } from "../frameworks/database/config.js";
const router = express.Router();

router.get("/allcourses", (req, res) => {
  connectDatabase();
  res.json(getAllCourses());
});

export { router };
