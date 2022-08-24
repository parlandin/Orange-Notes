import React, { useState } from "react";
import HomeInfos from "../../../components/HomeInfos";
import S from "./newAccount.style";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { BiInfoCircle } from "react-icons/bi";
import InputLabel from "../../../components/InputLabel";

const NewAccount = () => {
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
          <S.Title>Crie sua conta</S.Title>

          <S.Form>
            <S.WrapperGeneric>
              <InputLabel
                icon={<FiUser size="1.6rem" color="1E1E1E" />}
                type="text"
                placeholder="Username"
                name="username"
              />
            </S.WrapperGeneric>

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
                name="password"
              />
            </S.WrapperGeneric>

            <S.WrapperGeneric>
              <InputLabel
                icon={<FiLock size="1.6rem" color="1E1E1E" />}
                type="password"
                placeholder="Confirmar senha"
                name="confirmpassword"
              />
            </S.WrapperGeneric>

            <S.Button>Confirmar</S.Button>

            <S.LinkNewAccount to="/login">
              Já tem uma conta? Entre agora
            </S.LinkNewAccount>
          </S.Form>
        </S.WrapperForm>
      </S.Wrapper>
    </S.Container>
  );
};

export default NewAccount;
