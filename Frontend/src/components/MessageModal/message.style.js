import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 300px;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 3px #ccc6c6, -1px -1px 3px #ccc6c6;
  padding: 10px;
  z-index: 4;
  text-align: center;

  &.error {
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "#e35b5b6b")};
  }

  &.sucess {
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "#60be3157")};
  }

  & p {
    margin-bottom: 15px;
    font-size: 1.1rem;
  }
`;

const CloseModal = styled.div`
  position: fixed;
  z-index: 3;
  inset: 0;
  background-color: #d2cfcfa6;
`;

export default { Container, CloseModal };
