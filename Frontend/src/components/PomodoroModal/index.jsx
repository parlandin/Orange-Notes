import React, { useState } from "react";
import S from "./pomodoroModal.style";
import { BsFillLightbulbFill } from "react-icons/bs";
import { GiNightSleep } from "react-icons/gi";
import {
  IoIosCloseCircleOutline,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";

const PomodoroModal = ({
  isOpen,
  setIsOpenModal,
  setFocusMinutes,
  setBreakMinutes,
}) => {
  const [focusValue, setFocusValue] = useState(1);
  const [breakValue, setBreakValue] = useState(1);

  const handleSubmit = () => {
    setFocusMinutes(focusValue);
    setBreakMinutes(breakValue);
    return setIsOpenModal(false);
  };
  return (
    <>
      <S.Container className={isOpen ? "active" : "closed"}>
        <S.Title>Configurações do pomodoro</S.Title>
        <S.InputArea>
          <label htmlFor="pomotime">
            Digite os minutos para Foco
            <div className="focus">
              <BsFillLightbulbFill size="100%" />
            </div>
          </label>
          <input
            id="pomotime"
            type="number"
            value={focusValue}
            onChange={(e) => setFocusValue(e.target.value)}
            min={1}
            max={200}
            required
          ></input>
        </S.InputArea>

        <S.InputArea>
          <label htmlFor="pomotimebreak">
            Digite os minutos para Descanso
            <div className="break">
              <GiNightSleep size="100%" />
            </div>
          </label>
          <input
            id="pomotimebreak"
            type="number"
            value={breakValue}
            onChange={(e) => setBreakValue(e.target.value)}
            min={1}
            max={200}
            required
          ></input>
        </S.InputArea>

        <S.WrapperButtons>
          <S.Button className="out" onClick={() => setIsOpenModal(false)}>
            Sair
            <div>
              <IoIosCloseCircleOutline size="100%" />
            </div>
          </S.Button>
          <S.Button className="salve" onClick={handleSubmit}>
            Salvar
            <div>
              <IoIosCheckmarkCircleOutline size="100%" />
            </div>
          </S.Button>
        </S.WrapperButtons>
      </S.Container>

      <S.CloseModal
        className={isOpen ? "active" : "closed"}
        onClick={() => setIsOpenModal(false)}
      ></S.CloseModal>
    </>
  );
};

export default PomodoroModal;
