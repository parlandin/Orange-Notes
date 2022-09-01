import React, { useEffect, useRef, useState } from "react";
import S from "./home.style";
import quotes from "./quotes";
import { FaBookOpen, FaFileAlt, FaClock } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiMindMap } from "react-icons/ri";
import MenuCard from "../../../components/MenuCard";
import getRandomQuote from "../../../services/getRandomQuote";
import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import api from "../../../api";
import Loading from "../../../components/Loading";

const Home = () => {
  const menuRef = useRef(null);
  const Notesref = useRef(null);

  const scroll = (ref, scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const [authUser] = useAuth();
  const { user, token } = authUser;

  const getLatestNotes = async () => {
    try {
      const response = await api.get(`/notes/latest/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { data, isError, isLoading } = useQuery(
    ["latestNotes"],
    getLatestNotes,
    {
      refetchOnWindowFocus: false,
    }
  );

  console.log(data);
  const Menu = [
    {
      icon: <FaFileAlt size="100%" />,
      title: "Anotações",
      description: "Organize suas anotações",
      path: "/notes",
    },
    {
      icon: <FaBookOpen size="100%" />,
      title: "Lista de cursos",
      description: "Organize suas tarefas",
      path: "/courses",
    },
    {
      icon: <RiMindMap size="100%" />,
      title: "Mapa mental",
      description: "Memorize com mapas mentais",
      path: "/mindmap",
    },
    {
      icon: <FaClock size="100%" />,
      title: "Pomodoro Timer",
      description: "Foque tempo nos estudos",
      path: "/pomodorotime",
    },
  ];

  const quote = getRandomQuote(quotes);

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <S.Header>
        <S.Title>Continue estudando</S.Title>
      </S.Header>

      <S.QuoteSection>
        <p>"{quote.quote}"</p>
        <span>-{quote.author}</span>
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

            {!data.length == 0 ? (
              data.map((note) => (
                <S.NotesCard
                  key={note.note_id}
                  to={`notes/${note.note_id}`}
                  title={note.title}
                >
                  <p>{note.title}</p>
                </S.NotesCard>
              ))
            ) : (
              <S.NotesCard to="/notes/newnote">
                <p>Criar nova anotação agora</p>
              </S.NotesCard>
            )}
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
