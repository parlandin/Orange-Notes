import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: var(${({ theme }) => theme.color.background});
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 500px;
  border-radius: 6px;

  @media (max-width: 1025px) {
    margin: 0 10px;
  }
`;

const Text = styled.h1`
  color: var(${({ theme }) => theme.color.text});
`;

export default { Container, Wrapper };
