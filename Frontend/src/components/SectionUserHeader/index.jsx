import React, { useCallback } from "react";
import S from "./sectionUser.style";
//import Picture from "../../assets/images/croodlesNeutral.svg";
import useAuth from "../../hooks/useAuth";

const SectionUserHeader = () => {
  const [authUser] = useAuth();
  const { id, username, picture, consecutive_days } = authUser.user;

  const getFistName = useCallback((name) => {
    const FistName = name.split(" ");
    return FistName[0];
  }, []);

  return (
    <S.WrapperUser>
      <S.WelcomeUser>
        <p>
          Bem vindo, <span className="name">{getFistName(username)}</span>
        </p>
        <span className="days">
          Dias consecutivo: <span className="day">{consecutive_days}</span>
        </span>
      </S.WelcomeUser>
      <S.UserPicture>
        <img src={picture} alt="foto de usuario" />
      </S.UserPicture>
    </S.WrapperUser>
  );
};

export default SectionUserHeader;
