import React from "react";
import S from "./homeInfos.style";
import Icon from "../../assets/images/logoIcon.svg";
import Vectors from "../Vectors";
import { FiX } from "react-icons/fi";

const HomeInfos = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <S.Container className={modalIsOpen ? "active" : "not"}>
      <Vectors />

      <S.CloserModal
        onClick={() => setModalIsOpen(false)}
        aria-label="botão para fechar o modal"
      >
        <FiX size="1.6rem" />
      </S.CloserModal>

      <S.Logo>
        <S.Img>
          <img src={Icon} alt="logo do site orange notes" />
        </S.Img>
        <S.Title>Orange Notes</S.Title>
      </S.Logo>

      <S.ContainerInfos>
        <S.Text>Faça todas as suas anotações em um unico lugar</S.Text>
        <S.Text>Listagem para organizar seus cursos</S.Text>
        <S.Text>Organize suas ideias com mapas mentais</S.Text>
        <S.Text>Pomodoro Time para focar nos estudos </S.Text>
        <S.Text>Salvamento na nuvem</S.Text>
      </S.ContainerInfos>
    </S.Container>
  );
};

export default HomeInfos;
