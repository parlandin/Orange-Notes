import styled from "styled-components";

const Container = styled.section`
  background-color: var(${({ theme }) => theme.color.secondary});
  border-radius: 6px 0 0 6px;
  position: relative;

  @media (max-width: 570px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 380px;
    z-index: -1;
    opacity: 0;

    transition: opacity 0.3s ease-in-out;

    &.active {
      z-index: 1;
      opacity: 1;
    }
  }
`;

const CloserModal = styled.button`
  position: absolute;
  z-index: 3;
  cursor: pointer;
  border-radius: 6px;
  background-color: transparent;

  @media (min-width: 570px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 10px;
  z-index: 2;
`;

const Title = styled.h1`
  color: var(${({ theme }) => theme.color.black70});
  font-size: 2rem;
  font-weight: 500;
`;

const Img = styled.div`
  max-width: 65px;
  max-height: 65px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const ContainerInfos = styled.div`
  width: 100%;
  margin-top: calc(50% - 131px);
  padding: 10px;
  z-index: 2;
  box-sizing: border-box;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 1, 5rem;
  color: var(${({ theme }) => theme.color.text});
  margin: 20px 0;
`;

export default {
  Container,
  Logo,
  Title,
  Img,
  ContainerInfos,
  Text,
  CloserModal,
};
