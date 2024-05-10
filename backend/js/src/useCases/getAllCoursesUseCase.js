import { Course } from "../entities/Course.js";
export const getAllCourses = () => {
    return [new Course("hudi", "somecourse", "desc", "Link", false, "img")];
};
