import React from "react";
import S from "./dropDown.style";
import { GoSignOut, GoPerson } from "react-icons/go";

const DropDownMenu = ({ isOpenModal, setIsOpenModal }) => {
  return (
    <>
      <S.CloseModal
        className={isOpenModal ? "open" : "close"}
        onClick={() => setIsOpenModal(false)}
      ></S.CloseModal>
      <S.Container className={isOpenModal ? "open" : "close"}>
        <S.List>
          <li>
            <S.Item to="/configs" onClick={() => setIsOpenModal(false)}>
              <span>Perfil</span>
              <GoPerson />
            </S.Item>
          </li>

          <li>
            <S.Item to="/logout" onClick={() => setIsOpenModal(false)}>
              <span>Sair</span>
              <GoSignOut />
            </S.Item>
          </li>
        </S.List>
        <S.Span>só tem isso</S.Span>
      </S.Container>
    </>
  );
};

export default DropDownMenu;
