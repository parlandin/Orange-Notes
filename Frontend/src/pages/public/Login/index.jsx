import React, { useState } from "react";
import HomeInfos from "../../../components/HomeInfos";
import S from "./login.style";
import { BiInfoCircle } from "react-icons/bi";
import LoginForm from "../../../components/LoginForm";

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <S.Container>
      <S.Wrapper>
        <HomeInfos modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />

        <S.ButtonModal
          onClick={() => setModalIsOpen(true)}
          aria-label="botão para abri o modal"
          title="Clique para ver informações"
        >
          <BiInfoCircle size="1.6rem" />
        </S.ButtonModal>

        <S.WrapperForm modalIsOpen={modalIsOpen}>
          <S.Title>Entre na sua conta</S.Title>
          <LoginForm />
        </S.WrapperForm>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
