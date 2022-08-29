import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;
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

const Span = styled.span`
  margin-top: 16px;
  font-weight: 600;
  font-size: 1.2rem;
`;

export default { Container, WrapperButtons, PomodoroSection, Span };
