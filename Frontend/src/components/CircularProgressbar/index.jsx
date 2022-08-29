import React from "react";
import S from "./circular.style";

const CircularProgressbar = ({ time, progress, color }) => {
  return (
    <S.ContainerTiming>
      <S.Timming time={progress} color={color}>
        <p>{time}</p>
      </S.Timming>
    </S.ContainerTiming>
  );
};

export default CircularProgressbar;
