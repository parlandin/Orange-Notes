import React, { useState, useEffect } from "react";
import S from "./notes.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaList, FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import NotesCard from "../../../components/NotesCard";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";

const Notes = () => {
  const [currentMode, setCurrentMode] = useState("");
  const [authUser] = useAuth();
  const { user, token } = authUser;

  //route
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/notes/newnote", { replace: true });
  };

  const switchMode = (mode) => {
    window.localStorage.setItem("layout", mode);
    return setCurrentMode(mode);
  };

  const getAllNotes = async () => {
    const response = await api.get(`/notes/allnotes/${user.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.status == 200) {
      throw new Error("Ocorreu um erro");
    }
    console.log(response.data);
    return response.data;
  };

  const { data, isError, isLoading } = useQuery(["notes"], getAllNotes, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const salvedMode = window.localStorage.getItem("layout");
    if (salvedMode) {
      setCurrentMode(salvedMode);
    }
  }, []);

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <S.TopFixedContainer>
        <S.FixedContainer>
          <S.Header>
            <S.Title>Anotações</S.Title>
            <ButtonWithIcon
              icon={<FaPlus size="100%" />}
              label="Nova anotação"
              padding="2px 4px"
              backgroudFill={true}
              color="#000"
              margin="0px 0px 0px 10px"
              fontSize={"0.8rem"}
              onClick={handleOnClick}
            />
          </S.Header>

          <S.GenericSection>
            <S.InputLabel>
              <S.Input type="text" placeholder="Pesquisar anotação" />
              <IoSearch size="100%" />
            </S.InputLabel>

            <S.SectionButtons>
              <S.Button
                aria-label="botão: mudar para modo lista"
                className={currentMode == "list" ? "active" : "disable"}
                onClick={() => switchMode("list")}
              >
                <FaList className="list" size="100%" />
              </S.Button>

              <S.Button
                aria-label="botão: mudar para modo grid"
                className={currentMode == "grid" ? "active" : "disable"}
                onClick={() => switchMode("grid")}
              >
                <BsGrid1X2Fill size="100%" />
              </S.Button>
            </S.SectionButtons>
          </S.GenericSection>
        </S.FixedContainer>
      </S.TopFixedContainer>

      <S.SectionNotes
        className={currentMode == "grid" ? "gridActive" : "listActive"}
      >
        {data.map(
          ({
            note_id,
            title,
            content,
            title_color,
            content_color,
            box_color,
          }) => (
            <NotesCard
              key={note_id}
              id={note_id}
              title={title}
              content={content}
              titleColor={title_color}
              contentColor={content_color}
              boxColor={box_color}
              currentMode={currentMode}
            />
          )
        )}
      </S.SectionNotes>
    </S.Container>
  );
};

export default Notes;
