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
      return res.status(201).json({
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

  public async getAllCourses(req: AuthenticationRequest, res: Response) {
    const { userid } = req.params;

    try {
      const data = await CoursesService.getAllCourses(parseInt(userid));

      if (data.length <= 0) return res.status(200).json([]);
      console.log(data);
      const { user_id } = data[0];

      if (!req.userId || req.userId != parseInt(user_id)) {
        return res.status(404).json({ erro: true, message: "não encontrado" });
      }

      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: true, message: "Ocorreu um erro" });
    }
  }

  public async updateCourseById(
    req: AuthenticationRequest,
    res: Response
  ): Promise<Response> {
    const { title, url, image_url, category } = req.body;

    const { id } = req.params;

    try {
      if (req.userId) {
        const data = await CoursesService.updateById(
          title,
          url,
          image_url,
          category,
          parseInt(id),
          req.userId
        );

        if (!data) {
          throw Error("Ocorreu um erro ao atualizar o curso");
        }
      }

      return res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: true, message: "Ocorreu um erro ao atualizar o curso" });
    }
  }
}

export default new CoursesController();
