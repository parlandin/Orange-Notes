import React, { useEffect, useState } from "react";
import S from "./pomodoro.style";
import CircularProgressbar from "../../../components/CircularProgressbar";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { FaPlayCircle } from "react-icons/fa";

const Pomodoro = () => {
  const [timing, setTiming] = useState(90);
  const [interval, setInterval] = useState();

  return (
    <S.Container>
      <CircularProgressbar timing={timing} />
      <ButtonWithIcon
        icon={<FaPlayCircle size="100%" />}
        backgroudFill={true}
        label="Iniciar"
        padding="6px"
      />
    </S.Container>
  );
};

export default Pomodoro;
