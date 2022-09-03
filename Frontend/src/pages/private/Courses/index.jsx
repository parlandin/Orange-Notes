import React from "react";
import S from "./courses.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { FaPlus } from "react-icons/fa";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import ExempleImg from "../../../assets/images/exemplo.jpg";
import CourseCard from "../../../components/CourseCard";

const Courses = () => {
  useDocumentTitle("Seus cursos | Orange-notes");
  return (
    <S.Container>
      <S.Header>
        <S.Title>Seus cursos</S.Title>
        <ButtonWithIcon
          icon={<FaPlus size="100%" />}
          padding="2px 4px"
          label="Adicionar curso"
          backgroudFill={true}
          reverse={false}
          onClick={() => {}}
          fontSize={"0.8rem"}
        />
      </S.Header>

      <S.SectionCourses columns={false}>
        <CourseCard
          title="Esse é o primeiro curso e o titulo vai ter aquel etamanho padrão
              de 20 e um pouco mais"
          img={ExempleImg}
          href="https://github.com/gu-parlandim"
        />
      </S.SectionCourses>
    </S.Container>
  );
};

export default Courses;
