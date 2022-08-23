import React from "react";
import S from "./homeInfos.style";
import Icon from "../../assets/images/logoIcon.svg";
import ReactIcon from "../../assets/images/react.svg";
import StarIcon from "../../assets/images/star.svg";

const HomeInfos = () => {
  return (
    <S.Container>
      <S.Vectors>
        <img className="react" src={ReactIcon} />
        <img className="star" src={StarIcon} />
      </S.Vectors>
      <S.Logo>
        <S.Img>
          <img src={Icon} alt="logo do site orange notes" />
        </S.Img>
        <S.Title>Orange Notes</S.Title>
      </S.Logo>

      <S.ContainerInfos>
        <S.Text>Faça todas as suas anotações em um unico lugar</S.Text>
        <S.Text>Crie listas de tarefas (kanban, todo)</S.Text>
        <S.Text>Organize suas ideias com mapas mentais</S.Text>
        <S.Text>Pomodoro Time para focar nos estudos </S.Text>
      </S.ContainerInfos>
    </S.Container>
  );
};

export default HomeInfos;
