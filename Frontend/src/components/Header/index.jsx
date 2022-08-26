import React from "react";
import S from "./header.style";
import Logo from "../LogoComponent";
import SectionUserHeader from "../SectionUserHeader";

const Header = () => {
  return (
    <S.Container>
      <S.HeaderFix>
        <Logo />
        <SectionUserHeader />
      </S.HeaderFix>
    </S.Container>
  );
};

export default Header;
