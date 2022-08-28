import React from "react";
import S from "./dropDown.style";
import { GoSignOut } from "react-icons/go";

const DropDownMenu = ({ isOpenModal, setIsOpenModal }) => {
  return (
    <>
      <S.CloseModal
        className={isOpenModal ? "open" : "close"}
        onClick={() => setIsOpenModal(false)}
      ></S.CloseModal>
      <S.Container className={isOpenModal ? "open" : "close"}>
        <S.List>
          <S.Item to="/logout">
            <li>
              <span>Sair</span>
            </li>
            <GoSignOut />
          </S.Item>
        </S.List>
        <S.Span>só tem isso</S.Span>
      </S.Container>
    </>
  );
};

export default DropDownMenu;
