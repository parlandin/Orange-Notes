import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  border-bottom: 1px solid var(${({ theme }) => theme.color.secondary});
  background-color: #a6a3a336;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 20px;
  color: #ff5722d9;
`;

const Box = styled.main`
  padding: 20px;
  border-radius: 6px;
  background-color: #6be52fba;
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

const Button = styled(Link)`
  border-bottom: 1px solid var(${({ theme }) => theme.color.secondary});
  text-decoration: none;
  color: var(${({ theme }) => theme.color.text});
  margin: 10px;
  font-weight: 500;
`;

const Span = styled.span`
  position: absolute;
  bottom: 10px;
  font-size: 0.6rem;
`;

export default { Container, Button, Box, Span, Title };
