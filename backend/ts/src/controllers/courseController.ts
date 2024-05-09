import app from "../frameworks/app";
import { getAllCourses } from "../useCases/getAllCoursesUseCase";

app.get("/", (req, res) => {
  return res.send("hello");
});
