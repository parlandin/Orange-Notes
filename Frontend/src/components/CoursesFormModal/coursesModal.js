import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  max-width: 350px;
  width: 100%;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 3px #ccc6c6, -1px -1px 3px #ccc6c6;
  padding: 20px 10px;
  z-index: 4;
  text-align: center;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #fff;
`;

const Title = styled.h2`
  width: 100%;
  text-align: left;
  margin: 5px 0 10px;
  font-size: 1.4rem;
`;

const Span = styled.span`
  margin: 5px 0 20px;
  color: #473f3f;
  font-weight: 500;
`;

const Form = styled.form``;

const WrapperGeneric = styled.div`
  margin: 25px 0;
  position: relative;
`;

const Warning = styled.span`
  font-size: 0.7rem;
  color: #e70404e3;
  position: absolute;
  left: 4px;
  bottom: -14px;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CloseModal = styled.div`
  position: fixed;
  z-index: 3;
  inset: 0;
  background-color: #d2cfcfa6;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export default {
  Container,
  CloseModal,
  WrapperButton,
  Form,
  Title,
  WrapperGeneric,
  Span,
  Warning,
};
