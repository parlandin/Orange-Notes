import React, { useEffect, useState } from "react";
import S from "./courses.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { FaPlus } from "react-icons/fa";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import ExempleImg from "../../../assets/images/exemplo.jpg";
import CourseCard from "../../../components/CourseCard";
import CoursesFormModal from "../../../components/CoursesFormModal";

const Courses = () => {
  const [list, setList] = useState([{ id: 1 }, { id: 5 }]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState();

  useDocumentTitle("Seus cursos | Orange-notes");

  const handleCurrentItem = (id) => {
    setIsOpenModal(true);
    setCurrentCourse(id);
  };

  const handleNewCourse = () => {
    setIsOpenModal(true);
    setCurrentCourse("new");
  };

  return (
    <>
      <CoursesFormModal
        isOpen={isOpenModal}
        cancelOnClick={() => setIsOpenModal(false)}
        current={currentCourse}
      />
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
          columns={list.length > 4}
          columns900={list.length > 2}
          columns600={list.length > 1}
        >
          {list.map((el) => (
            <CourseCard
              key={el.id}
              title="Esse é o primeiro curso e o titulo vai ter aquel etamanho padrão
              de 20 e um pouco mais"
              img={ExempleImg}
              href="https://github.com/gu-parlandim"
              onClickMenu={() => {
                handleCurrentItem(el.id);
              }}
            />
          ))}
        </S.SectionCourses>
      </S.Container>
    </>
  );
};

export default Courses;
