import React from "react";
import S from "./optionModal";
import ButtonWithIcon from "../ButtonWithIcon";
import { MdOutlineCheck, MdOutlineHighlightOff } from "react-icons/md";

const OptionModal = ({ message, confirmOnClick, cancelOnClick, isOpen }) => {
  return (
    <>
      <S.Container isOpen={isOpen}>
        <p>{message} </p>

        <S.WrapperButton>
          <ButtonWithIcon
            backgroudFill={true}
            label="Confirmar"
            icon={<MdOutlineCheck size="100%" />}
            onClick={confirmOnClick}
          />

          <ButtonWithIcon
            backgroudFill={true}
            label="Cancelar"
            icon={<MdOutlineHighlightOff size="100%" />}
            onClick={cancelOnClick}
          />
        </S.WrapperButton>
      </S.Container>

      <S.CloseModal isOpen={isOpen} onClick={cancelOnClick}></S.CloseModal>
    </>
  );
};

export default OptionModal;
