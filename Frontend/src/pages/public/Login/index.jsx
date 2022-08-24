import React, { useState } from "react";
import HomeInfos from "../../../components/HomeInfos";
import S from "./login.style";
import { FiLock, FiMail } from "react-icons/fi";
import { BiInfoCircle } from "react-icons/bi";
import InputLabel from "../../../components/InputLabel";

const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <S.Container>
      <S.Wrapper>
        <HomeInfos modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />

        <S.ButtonModal onClick={() => setModalIsOpen(true)}>
          <BiInfoCircle size="1.6rem" />
        </S.ButtonModal>

        <S.WrapperForm modalIsOpen={modalIsOpen}>
          <S.Title>Entre na sua conta</S.Title>

          <S.Form>
            <S.WrapperGeneric>
              <InputLabel
                icon={<FiMail size="1.6rem" color="1E1E1E" />}
                type="email"
                placeholder="E-mail"
                name="email"
              />
            </S.WrapperGeneric>

            <S.WrapperGeneric>
              <InputLabel
                icon={<FiLock size="1.6rem" color="1E1E1E" />}
                type="password"
                placeholder="Senha"
                name="senha"
              />
            </S.WrapperGeneric>

            <S.Button>Entar</S.Button>

            <S.LinkNewAccount to="/newaccount">
              Não tem uma conta? Criar agora
            </S.LinkNewAccount>
          </S.Form>
        </S.WrapperForm>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
