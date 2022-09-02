import React, { useState } from "react";
import HomeInfos from "../../../components/HomeInfos";
import S from "./newAccount.style";
import { BiInfoCircle } from "react-icons/bi";
import AccountForm from "../../../components/AccountForm";

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
          <AccountForm />
        </S.WrapperForm>
      </S.Wrapper>
    </S.Container>
  );
};

export default NewAccount;
