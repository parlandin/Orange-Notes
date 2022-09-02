import React, { useState } from "react";
import S from "./header.style";
import Logo from "../LogoComponent";
import SectionUserHeader from "../SectionUserHeader";
import DropDownMenu from "../DropDownMenu";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <S.Container>
      <S.HeaderFix>
        <Logo />
        <SectionUserHeader setIsOpenModal={setIsOpenModal} />
        <DropDownMenu
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      </S.HeaderFix>
    </S.Container>
  );
};

export default Header;
