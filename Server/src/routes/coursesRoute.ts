import { Router } from "express";
import CoursesController from "../controllers/CoursesController";

const coursesRouter = Router();

coursesRouter.get("/courses/getall/:userid", CoursesController.getAllCourses);
coursesRouter.post("/courses/newcourse", CoursesController.createCourse);

export default coursesRouter;
