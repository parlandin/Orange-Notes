import React from "react";
import S from "./logo.style";
import LogoSvg from "../../assets/images/orangeLogo.svg";

const Logo = () => {
  return (
    <S.Logo>
      <S.LogoImg>
        <img src={LogoSvg} alt="logo do orange notes" />
      </S.LogoImg>
      <S.LogoText>Orange Notes</S.LogoText>
    </S.Logo>
  );
};

export default Logo;
