import React from "react";
import S from "./sectionNotes.style";
import NotesCard from "../NotesCard";

const SectionNotes = ({ currentMode, data, type }) => {
  if (data.length <= 0 && type == "search") {
    return <S.notFoud>Nenhum resultado encontrado</S.notFoud>;
  }

  if (data.length <= 0 && type == "fetchData") {
    return (
      <S.SectionNotes>
        <NotesCard
          key={1}
          id={"newnote"}
          title="Ainda não há nenhuma nota cadastrada, veja detalhes no botão no canto superior direito"
          content="Faça já sua primeira nota, clique no botão acima 'Nova anotação' ou click me"
          titleColor="#1e1e1e"
          contentColor="#1e1e1e"
          boxColor="#abd9d4"
          currentMode={currentMode}
        />
      </S.SectionNotes>
    );
  }

  return (
    <S.SectionNotes
      className={currentMode == "list" ? "listActive" : "gridActive"}
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
  );
};

export default SectionNotes;
