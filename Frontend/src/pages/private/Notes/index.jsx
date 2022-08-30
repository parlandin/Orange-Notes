import React, { useState } from "react";
import S from "./notes.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import notesData from "./notesdata";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaList, FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import NotesCard from "../../../components/NotesCard";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [currentMode, setCurrentMode] = useState("grid");
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/notes/newnote", { replace: true });
  };

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
                onClick={() => setCurrentMode("list")}
              >
                <FaList className="list" size="100%" />
              </S.Button>

              <S.Button
                aria-label="botão: mudar para modo grid"
                className={currentMode == "grid" ? "active" : "disable"}
                onClick={() => setCurrentMode("grid")}
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
        {notesData.map(
          ({ id, title, content, title_color, content_color, box_color }) => (
            <NotesCard
              key={id}
              id={id}
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
