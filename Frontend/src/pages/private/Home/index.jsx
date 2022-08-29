import React, { useEffect, useRef, useState } from "react";
import S from "./home.style";
import quotes from "./quotes";
import { FaTasks, FaFileAlt, FaClock } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiMindMap } from "react-icons/ri";
import MenuCard from "../../../components/MenuCard";

const Home = () => {
  const menuRef = useRef(null);
  const Notesref = useRef(null);

  const scroll = (ref, scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const Menu = [
    {
      icon: <FaFileAlt size="100%" />,
      title: "Anotações",
      description: "Organize suas anotações",
      path: "/notes",
    },
    {
      icon: <FaTasks size="100%" />,
      title: "Tarefas",
      description: "Organize suas tarefas",
      path: "/notes",
    },
    {
      icon: <RiMindMap size="100%" />,
      title: "Mapa mental",
      description: "Memorize com mapas mentais",
      path: "/notes",
    },
    {
      icon: <FaClock size="100%" />,
      title: "Pomodoro Timer",
      description: "Foque tempo nos estudos",
      path: "/notes",
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.Title>Continue estudando</S.Title>
      </S.Header>

      <S.QuoteSection>
        <p>"{quotes[1].quote}"</p>
        <span>-{quotes[1].author}</span>
      </S.QuoteSection>

      <S.Carrousel>
        <S.CardsSection ref={menuRef}>
          <S.SlideButton className="left" onClick={() => scroll(menuRef, -133)}>
            {<IoIosArrowBack size="100%" />}
          </S.SlideButton>
          <S.SlideButton className="right" onClick={() => scroll(menuRef, 133)}>
            {<IoIosArrowForward size="100%" />}
          </S.SlideButton>

          {Menu.map((item) => {
            const { icon, title, description, path } = item;
            return (
              <MenuCard
                key={title}
                path={path}
                icon={icon}
                description={description}
                title={title}
              />
            );
          })}
        </S.CardsSection>
      </S.Carrousel>

      <S.GenericSection>
        <S.GenericTitle>Suas ultimas anotações</S.GenericTitle>

        <S.Carrousel>
          <S.CardsSection ref={Notesref}>
            <S.SlideButton
              className="left"
              onClick={() => scroll(Notesref, -133)}
            >
              {<IoIosArrowBack size="100%" />}
            </S.SlideButton>

            <S.SlideButton
              className="right"
              onClick={() => scroll(Notesref, 133)}
            >
              {<IoIosArrowForward size="100%" />}
            </S.SlideButton>

            <S.NotesCard to="/notes">
              <p>Criar nova anotação agora</p>
            </S.NotesCard>
          </S.CardsSection>
        </S.Carrousel>
      </S.GenericSection>

      <S.GenericSection>
        <S.GenericTitle>Tarefas para fazer</S.GenericTitle>

        <S.ComingSoon>Essa funcionalidade chegarar em breve</S.ComingSoon>
      </S.GenericSection>
    </S.Container>
  );
};

export default Home;
