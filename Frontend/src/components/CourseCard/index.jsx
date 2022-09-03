import React from "react";
import S from "./courseCard.style";
import { FiMoreVertical } from "react-icons/fi";

const CourseCard = ({ title, img, href }) => {
  return (
    <S.Container title={`ir para ${title}`}>
      <S.CardImg>
        <img src={img} alt={`imagem do curso ${title}`} />
      </S.CardImg>

      <S.WrapperInfo>
        <S.CardTitle>{title}</S.CardTitle>

        <S.WrapperButton onClick={() => console.log("foi")}>
          <S.CardButton title="ver mais" aria-label="botão menu">
            <FiMoreVertical />
          </S.CardButton>
        </S.WrapperButton>
      </S.WrapperInfo>

      <S.Link href={href} target="_blank"></S.Link>
    </S.Container>
  );
};

export default CourseCard;
