import React from "react";
import S from "./notFound.style";

const NotFound = () => {
  return (
    <S.Container>
      <S.WrapperNotFound>
        <span>404</span>
        <p>Pagina não encontrada </p>
      </S.WrapperNotFound>
      <S.WrapperWave></S.WrapperWave>
    </S.Container>
  );
};

export default NotFound;
