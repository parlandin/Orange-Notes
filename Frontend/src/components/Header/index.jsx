import React from "react";
import S from "./header.style";
import Logo from "../LogoComponent";
import SectionUserHeader from "../SectionUserHeader";
import DropDownMenu from "../DropDownMenu";

const Header = () => {
  return (
    <S.Container>
      <S.HeaderFix>
        <Logo />
        <SectionUserHeader />
        <DropDownMenu />
      </S.HeaderFix>
    </S.Container>
  );
};

export default Header;
