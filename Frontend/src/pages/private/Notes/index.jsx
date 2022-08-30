import React, { useState } from "react";
import S from "./notes.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import notesData from "./notesdata";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

const NoteCardComponent = ({
  id,
  title,
  content,
  titleColor,
  contentColor,
  boxColor,
  currentMode,
}) => {
  return (
    <S.Card boxColor={boxColor}>
      <S.CardTitle titleColor={titleColor}>{title}</S.CardTitle>
      {currentMode == "grid" && (
        <S.CardContent contentColor={contentColor}>{content}</S.CardContent>
      )}
    </S.Card>
  );
};

const Notes = () => {
  const [currentMode, setCurrentMode] = useState("grid");
  return (
    <S.Container>
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

      <S.SectionNotes
        className={currentMode == "grid" ? "gridActive" : "listActive"}
      >
        {notesData.map(
          ({ id, title, content, title_color, content_color, box_color }) => (
            <NoteCardComponent
              key={id}
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
