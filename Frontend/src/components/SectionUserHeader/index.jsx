import React from "react";
import S from "./sectionUser.style";
//import Picture from "../../assets/images/croodlesNeutral.svg";
import useAuth from "../../hooks/useAuth";

const SectionUserHeader = () => {
  const [authUser] = useAuth();
  const { id, username, picture } = authUser.user;
  return (
    <S.WrapperUser>
      <S.WelcomeUser>
        <p>
          Bem vindo, <span className="name">{username}</span>
        </p>
        <span className="days">
          Dias consecutivo: <span className="day">{1}</span>
        </span>
      </S.WelcomeUser>
      <S.UserPicture>
        <img src={picture} alt="foto de usuario" />
      </S.UserPicture>
    </S.WrapperUser>
  );
};

export default SectionUserHeader;
