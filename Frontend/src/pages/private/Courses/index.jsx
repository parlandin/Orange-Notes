import React from "react";
import S from "./courses.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { FaPlus } from "react-icons/fa";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import ExempleImg from "../../../assets/images/exemplo.jpg";

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

      <S.SectionCourses>
        <S.CourseCard href="https://github.com/gu-parlandim" target="_blank">
          <S.CardImg>
            <img src={ExempleImg} alt="aqui vai a imagem" />
          </S.CardImg>
          <S.CardTitle>Esse é o primeiro curso</S.CardTitle>
        </S.CourseCard>
      </S.SectionCourses>
    </S.Container>
  );
};

export default Courses;
