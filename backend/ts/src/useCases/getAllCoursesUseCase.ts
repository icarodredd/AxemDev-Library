import { Course } from "../entities/Course.js";

export const getAllCourses = (): Array<Course> => {
  return [new Course("hudi", "somecourse", "desc", "Link", false, "img")];
};
