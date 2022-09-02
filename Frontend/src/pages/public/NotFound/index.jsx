import React from "react";
import S from "./notFound.style";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const NotFound = () => {
  useDocumentTitle("Não encontrado | Orange-notes");
  return (
    <S.Container>
      <S.WrapperNotFound>
        <span>404</span>
        <p>Pagina não encontrada </p>
        <S.Button to="/">inicio</S.Button>
      </S.WrapperNotFound>
      <S.WrapperWave></S.WrapperWave>
    </S.Container>
  );
};

export default NotFound;
