import React from "react";
import S from "./sucessAccount.style";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const SucessCreateAccount = () => {
  useDocumentTitle("Conta criada com sucesso | Orange-notes");
  return (
    <S.Container>
      <S.Box>
        <S.Title>Orange Notes</S.Title>
        <p>Conta criada com sucesso!</p>
        <S.Button to="/login">Voltar para tela de login</S.Button>
      </S.Box>

      <S.Span>Futura tela para envio de email de confirmação</S.Span>
    </S.Container>
  );
};

export default SucessCreateAccount;
