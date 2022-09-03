import React from "react";
import S from "./configPage.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { TiArrowBack } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";

const ConfigPage = () => {
  const handleOnClickBack = () => {
    console.log(foi);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Perfil</S.Title>
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

      <S.WrapperInfo>
        <S.WrapperPicture>
          <img
            src="https://avatars.dicebear.com/api/croodles-neutral/kwNw5US1.svg"
            alt="foto de perfil do usuario"
          />
        </S.WrapperPicture>
        <S.WrapperUser>
          <S.field>
            <S.Span>Nome: </S.Span>Gustavo Parlandim
          </S.field>

          <S.field>
            <S.Span>E-mail: </S.Span> gustavoparlandim@gmail.com
          </S.field>

          <S.field>
            <S.Span>Criado em: </S.Span> 24/08/2022
          </S.field>
        </S.WrapperUser>

        <S.WrapperButton>
          <ButtonWithIcon
            icon={<BsTrash size="100%" />}
            padding="2px 4px"
            label="Excluir conta"
            backgroudFill={true}
            reverse={false}
            onClick={handleOnClickBack}
          />
        </S.WrapperButton>
      </S.WrapperInfo>
      <S.Warnig>
        Essa página é destinada a edição do perfil, funcionalidade que chegará
        em breve
      </S.Warnig>
    </S.Container>
  );
};

export default ConfigPage;
