import { Course } from "../entities/Course";
export const getAllCourses = () => {
    return [new Course("hudi", "somecourse", "desc", "Link", false)];
};
