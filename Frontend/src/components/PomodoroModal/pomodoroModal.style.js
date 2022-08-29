import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  box-shadow: 2px 1px 7px #d3cfcf, -2px -1px 7px #d3cfcf;
  padding: 20px;
  border-radius: 6px;
  opacity: 0;
  height: 0;
  overflow: hidden;

  &.active {
    top: 50%;
    left: 50%;
    z-index: 2;
    background-color: #fff;
    opacity: 1;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
`;

const InputArea = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  padding: 5px 0;

  & label {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 5px 0;
    display: flex;
    align-items: center;

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17px;
      height: 17px;
      color: #ffc107;
      margin-left: 5px;

      &.break {
        color: #166286;
      }
    }
  }

  & input {
    border-radius: 6px;
    border: none;
    font-size: 1.4rem;
    background-color: #dedede;
  }
`;

const WrapperButtons = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: #ff5f19d9;
  border: none;
  font-size: 1.1rem;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ff5f1996;
  }

  & + button {
    margin-left: 15px;
  }

  & div {
    width: 19px;
    height: 19px;
  }
`;

const CloseModal = styled.div`
  position: absolute;
  z-index: -1;
  &.active {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export default {
  Container,
  CloseModal,
  Title,
  InputArea,
  Button,
  WrapperButtons,
};
