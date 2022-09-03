import React from "react";
import S from "./mindMap.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const MindMap = () => {
  const navigate = useNavigate();

  const handleOnClickBack = () => {
    navigate(-1, { replace: true });
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Mapa Mental</S.Title>
        <ButtonWithIcon
          icon={<TiArrowBack size="100%" />}
          padding="2px 4px"
          label="Voltar"
          backgroudFill={true}
          reverse={true}
          onClick={handleOnClickBack}
          margin="0 15px 0px 0px"
        />
      </S.Header>
      <S.Warning>Essa funcionalidade chegará em breve</S.Warning>
    </S.Container>
  );
};

export default MindMap;
