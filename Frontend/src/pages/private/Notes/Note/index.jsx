import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import S from "./note.style";
import Data from "../notesdata";
import ButtonWithIcon from "../../../../components/ButtonWithIcon";
import { TiArrowBack } from "react-icons/ti";
import { BiCommentEdit } from "react-icons/bi";

const Note = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleOnClickBack = () => {
    navigate(-1, { replace: true });
  };

  return (
    <S.Container>
      <S.ContainerFixed>
        <S.Header>
          <ButtonWithIcon
            icon={<TiArrowBack size="100%" />}
            padding="2px 4px"
            label="Voltar"
            backgroudFill={true}
            reverse={true}
            onClick={handleOnClickBack}
            margin="0 15px 0px 0px"
          />

          <ButtonWithIcon
            icon={<BiCommentEdit size="100%" />}
            padding="2px 6px"
            label="Editar"
            backgroudFill={true}
            reverse={false}
            onClick={handleOnClickBack}
          />
        </S.Header>
      </S.ContainerFixed>

      <S.Title>{Data[id].title}</S.Title>
      <S.Content>{Data[id].content}</S.Content>
    </S.Container>
  );
};

export default Note;
