import React, { useEffect, useState, useRef } from "react";
import S from "./pomodoro.style";
import CircularProgressbar from "../../../components/CircularProgressbar";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { FaPlayCircle, FaRedoAlt, FaCog } from "react-icons/fa";
import PomodoroModal from "../../../components/PomodoroModal";

const Pomodoro = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState();
  const [focusMinutes, setFocusMinutes] = useState(1);
  const [breakMinutes, setBreakMinutes] = useState(1);
  const [currentState, setCurrentState] = useState("focus");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const currentStateRef = useRef(currentState);
  const renders = useRef(0);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  const handleOnClick = () => {
    if (isPaused) {
      setIsPaused(false);
      isPausedRef.current = false;
      return;
    }
    setIsPaused(true);
    isPausedRef.current = true;
  };

  useEffect(() => {
    renders.current = renders.current + 1;
    const changeCurrentState = () => {
      const next = currentStateRef.current == "focus" ? "break" : "focus";
      const nextSeconds =
        next == "focus" ? focusMinutes * 60 : breakMinutes * 60;

      setCurrentState(next);
      currentStateRef.current = next;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    };

    secondsLeftRef.current = focusMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const time = setInterval(() => {
      console.log("caiu aqui");
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return changeCurrentState();
      }
      tick();
    }, 1000);

    return () => clearInterval(time);
  }, [focusMinutes, breakMinutes]);

  const totalSeconds =
    currentState === "focus" ? focusMinutes * 60 : breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  const twoNumber = (number) => {
    if (number < 10) {
      return `0${number}`;
    }

    return number;
  };

  return (
    <S.Container>
      <PomodoroModal
        isOpen={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        setFocusMinutes={setFocusMinutes}
        setBreakMinutes={setBreakMinutes}
      />

      <S.PomodoroSection>
        <CircularProgressbar
          time={`${twoNumber(minutes)}:${twoNumber(seconds)}`}
          progress={percentage}
          color={currentState == "focus" ? "#E32626" : "#57b91cbd"}
        />

        <p>{renders.current}</p>

        <S.WrapperButtons>
          <ButtonWithIcon
            icon={<FaPlayCircle size="100%" />}
            backgroudFill={true}
            label="Iniciar"
            padding="4px 8px"
            margin="10px"
            onClick={handleOnClick}
          />
          <ButtonWithIcon
            icon={<FaRedoAlt size="100%" />}
            backgroudFill={true}
            label="Reiniciar"
            padding="4px 8px"
            margin="10px"
          />
          <ButtonWithIcon
            icon={<FaCog size="100%" />}
            backgroudFill={true}
            label="Configurar"
            padding="4px 8px"
            margin="10px"
            onClick={() => setIsOpenModal(true)}
          />
        </S.WrapperButtons>
      </S.PomodoroSection>
    </S.Container>
  );
};

export default Pomodoro;
