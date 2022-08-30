import React from "react";
import S from "./notesCard.style";

const NotesCard = ({
  id,
  title,
  content,
  titleColor,
  contentColor,
  boxColor,
  currentMode,
}) => {
  return (
    <S.Card boxcolor={boxColor} to={`/notes/${id}`}>
      <S.Title titleColor={titleColor}>
        {currentMode == "list" ? title : title.substr(0, 50)}
      </S.Title>
      {currentMode == "grid" && (
        <S.Content contentColor={contentColor}>{content}</S.Content>
      )}
    </S.Card>
  );
};

export default NotesCard;
