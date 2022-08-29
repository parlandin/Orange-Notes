import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const PomodoroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperButtons = styled.div`
  display: flex;
  margin-top: 20px;
`;

export default { Container, WrapperButtons, PomodoroSection };
