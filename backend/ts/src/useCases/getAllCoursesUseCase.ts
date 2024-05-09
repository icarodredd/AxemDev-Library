import { Course } from "../entities/Course";

export const getAllCourses = (): Array<Course> => {
  return [new Course("hudi", "somecourse", "desc", "Link", false)];
};
