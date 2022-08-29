import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: calc(100% - 38px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;
`;

const Header = styled.div`
  padding: 10px 10px 0;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
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

export default {
  Container,
  WrapperButtons,
  PomodoroSection,
  Span,
  Header,
  Title,
};
