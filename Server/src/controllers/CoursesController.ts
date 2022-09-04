import { Request, Response } from "express";
import CoursesService from "../services/CoursesService";
import AuthenticationRequest from "../types/express";

class CoursesController {
  public async createCourse(
    req: AuthenticationRequest,
    res: Response
  ): Promise<Response> {
    const { title, url, image_url, category, user_id } = req.body;

    if (!req.userId || req.userId != parseInt(user_id)) {
      return res.status(401).json({ message: "Você não tem permissão" });
    }

    try {
      const data = await CoursesService.createCourse(
        title,
        url,
        image_url,
        category,
        parseInt(user_id)
      );

      if (!data) {
        throw Error("Ocorreu um erro ao criar nota");
      }

      const {
        title: resTitle,
        url: resUrl,
        image_url: resImg,
        category: resCategory,
        course_id: resId,
      } = data;
      return res
        .status(201)
        .json({
          title: resTitle,
          url: resUrl,
          image_url: resImg,
          category: resCategory,
          id: resId,
        });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Ocorreu um erro ao criar nota" });
    }
  }
}

export default new CoursesController();
