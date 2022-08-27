import React from "react";
import { Outlet } from "react-router-dom";
import S from "./privateArea.style";
import Header from "../Header";
import Sidebar from "../Sidebar";

const PrivateArea = () => {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <Sidebar />
        <Outlet />
      </S.Main>
    </S.Container>
  );
};

export default PrivateArea;
