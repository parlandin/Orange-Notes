import React, { useState } from "react";
import HomeInfos from "../../../components/HomeInfos";
import S from "./login.style";
import { BiInfoCircle } from "react-icons/bi";
import LoginForm from "../../../components/LoginForm";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loading";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [userAuth] = useAuth();
  const { isLoading, isUser } = userAuth;

  if (isLoading) return <Loading />;

  if (isUser) return <Navigate to="/" />;

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
