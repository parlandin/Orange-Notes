import React, { useEffect, useState, useId } from "react";
import S from "./courses.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { FaPlus } from "react-icons/fa";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import ExempleImg from "../../../assets/images/exemple.jpg";
import CourseCard from "../../../components/CourseCard";
import CoursesFormModal from "../../../components/CoursesFormModal";
import api from "../../../api";
import useAuth from "../../../hooks/useAuth";
import MessageModal from "../../../components/MessageModal";
import Loading from "../../../components/Loading";
import { useQuery } from "react-query";

const Courses = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState("new");

  const [authUser] = useAuth();
  const { user, token } = authUser;

  useDocumentTitle("Seus cursos | Orange-notes");

  const handleCurrentItem = (id) => {
    setIsOpenModal(true);
    setCurrentCourse(id);
  };

  const handleNewCourse = () => {
    setIsOpenModal(true);
    setCurrentCourse("new");
  };

  const getAllCourses = async () => {
    const response = await api.get(`courses/getall/${user.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.status == 200) {
      throw new Error("Ocorreu um erro");
    }

    return response.data;
  };

  const { data, isError, isLoading } = useQuery(["courses"], getAllCourses, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (isError) {
    return (
      <MessageModal type="error" message="Ocorreu um erro ao carregar cursos" />
    );
  }

  if (isLoading) return <Loading />;

  return (
    <>
      {isOpenModal && (
        <CoursesFormModal
          isOpen={isOpenModal}
          cancelOnClick={() => setIsOpenModal(false)}
          currentId={currentCourse}
          setIsOpenModal={setIsOpenModal}
        />
      )}
      <S.Container>
        <S.Header>
          <S.Title>Seus cursos</S.Title>
          <ButtonWithIcon
            icon={<FaPlus size="100%" />}
            padding="2px 4px"
            label="Adicionar curso"
            backgroudFill={true}
            reverse={false}
            onClick={handleNewCourse}
            fontSize={"0.8rem"}
          />
        </S.Header>

        <S.SectionCourses
          /* temporario / TODO: remover isso */
          columns={data.length > 4}
          columns900={data.length > 2}
          columns600={data.length > 1}
        >
          {data.length <= 0 ? (
            <CourseCard
              key={1}
              title="Organize todos os seus cursos em um unico lugar, começe agora mesmo!"
              img={ExempleImg}
              href="#"
            />
          ) : (
            data.map(({ course_id, image_url, title, url }) => (
              <CourseCard
                key={course_id ? course_id : title}
                title={title}
                img={image_url}
                href={url}
                onClickMenu={() => {
                  handleCurrentItem(course_id);
                }}
              />
            ))
          )}
        </S.SectionCourses>
      </S.Container>
    </>
  );
};

export default Courses;
