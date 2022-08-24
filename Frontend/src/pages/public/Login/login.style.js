import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: fit-content(46%) auto;
  background-color: var(${({ theme }) => theme.color.background});
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 500px;
  border-radius: 6px;

  @media (max-width: 1025px) {
    margin: 0 10px;
  }

  @media (max-width: 570px) {
    grid-template-columns: auto;
    position: relative;
  }
`;

const WrapperForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 5px;

  @media (max-width: 570px) {
    opacity: ${({ modalIsOpen }) => (modalIsOpen ? 0 : 1)};
  }
`;

const Title = styled.h2`
  color: var(${({ theme }) => theme.color.text});
  font-weight: 600;
  font-size: 1.8rem;
`;

const Form = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperGeneric = styled.div`
  margin: 20px 0;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 2px solid var(${({ theme }) => theme.color.secondary});
  padding: 6px;
  max-width: 300px;
  width: 100%;
  color: var(${({ theme }) => theme.color.text});
  font-size: 1.4rem;
  cursor: pointer;
  font-weight: 600;
  margin: 20px;
`;

const LinkNewAccount = styled(Link)`
  border-bottom: 1px solid var(${({ theme }) => theme.color.secondary});
  text-decoration: none;
  color: var(${({ theme }) => theme.color.text});
  margin-top: 20px;
`;

const ButtonModal = styled.button`
  background: transparent;
  border: none;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 70px;
  left: 50%;
  cursor: pointer;

  @media (min-width: 570px) {
    display: none;
  }
`;

export default {
  Container,
  Wrapper,
  Title,
  WrapperForm,
  Form,
  WrapperGeneric,
  Button,
  LinkNewAccount,
  ButtonModal,
};
