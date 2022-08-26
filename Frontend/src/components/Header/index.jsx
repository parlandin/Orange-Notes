import React from "react";
import S from "./header.style";
import Logo from "../Logo";
import Picture from "../../assets/images/croodlesNeutral.svg";

const Header = () => {
  return (
    <S.Container>
      <S.HeaderFix>
        <Logo />
        <S.WrapperUser>
          <S.WelcomeUser>
            <p>
              Bem vindo, <S.Span>{"Parlandim"}</S.Span>
            </p>
            <span className="days">
              Dias consecutivo: <span className="day">{1}</span>
            </span>
          </S.WelcomeUser>
          <S.UserPicture>
            <img src={Picture} alt="foto de usuario" />
          </S.UserPicture>
        </S.WrapperUser>
      </S.HeaderFix>
    </S.Container>
  );
};

export default Header;
