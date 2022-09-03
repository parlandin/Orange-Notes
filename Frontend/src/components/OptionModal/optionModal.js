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
  padding: 20px 10px;
  z-index: 4;
  text-align: center;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #fff;

  & p {
    margin-bottom: 25px;
    font-size: 1.1rem;
  }
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

export default { Container, CloseModal, WrapperButton };
