import React from "react";
import { Outlet } from "react-router-dom";
import S from "./privateArea.style";
import Header from "../Header";

const PrivateArea = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  );
};

export default PrivateArea;
