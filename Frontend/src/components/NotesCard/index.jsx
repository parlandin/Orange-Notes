import React, { memo } from "react";
import S from "./notesCard.style";

const NotesCardComponent = ({
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
      <S.WrapperTitle>
        <S.Title titleColor={titleColor} title={title}>
          {currentMode == "list" ? title : title}
        </S.Title>
      </S.WrapperTitle>

      {currentMode == "grid" && (
        <S.WrapperContent>
          <S.Content contentColor={contentColor}>{content}</S.Content>
        </S.WrapperContent>
      )}
    </S.Card>
  );
};

const NotesCard = memo(NotesCardComponent);

export default NotesCard;
