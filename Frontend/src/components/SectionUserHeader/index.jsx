import React from "react";
import S from "./sectionUser.style";
import Picture from "../../assets/images/croodlesNeutral.svg";

const SectionUserHeader = () => {
  return (
    <S.WrapperUser>
      <S.WelcomeUser>
        <p>
          Bem vindo, <span className="name">{"Parlandim"}</span>
        </p>
        <span className="days">
          Dias consecutivo: <span className="day">{1}</span>
        </span>
      </S.WelcomeUser>
      <S.UserPicture>
        <img src={Picture} alt="foto de usuario" />
      </S.UserPicture>
    </S.WrapperUser>
  );
};

export default SectionUserHeader;
