import CoursesRepositorie from "../repositories/CoursesRepositorie";

class CoursesService {
  public async createCourse(
    title: string,
    url: string,
    image_url: string,
    category: string,
    user_id: number
  ) {
    const { rows } = await CoursesRepositorie.createCourse(
      title,
      url,
      image_url,
      category,
      user_id
    );
    return rows[0];
  }

  public async getAllCourses(user_id: number) {
    const { rows } = await CoursesRepositorie.getlAllCourses(user_id);

    return rows;
  }
}

export default new CoursesService();
