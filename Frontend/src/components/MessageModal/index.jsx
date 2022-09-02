import React from "react";
import S from "./message.style";
import ButtonWithIcon from "../ButtonWithIcon";
import { MdOutlineCheck } from "react-icons/md";

const MessageModal = ({ type, message, onClick }) => {
  return (
    <>
      <S.Container className={type}>
        <p>{message} </p>

        <ButtonWithIcon
          backgroudFill={true}
          label="Confirmar"
          icon={<MdOutlineCheck size="100%" />}
          onClick={onClick}
        />
      </S.Container>

      <S.CloseModal></S.CloseModal>
    </>
  );
};

export default MessageModal;
