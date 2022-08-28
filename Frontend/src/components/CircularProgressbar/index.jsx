import React from "react";
import S from "./circular.style";

const CircularProgressbar = ({ timing }) => {
  return (
    <S.ContainerTiming>
      <S.Timming time={timing}>
        <p>{"05:10"}</p>
      </S.Timming>
    </S.ContainerTiming>
  );
};

export default CircularProgressbar;
