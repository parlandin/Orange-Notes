import styled from "styled-components";

const Container = styled.section`
  background-color: var(${({ theme }) => theme.color.secondary});
  border-radius: 6px 0 0 6px;
  position: relative;
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
  margin-top: calc(50% - 100px);
  padding: 10px;
  z-index: 2;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 1, 5rem;
  color: var(${({ theme }) => theme.color.text});
  margin: 20px 0;
  word-wrap: break-word;
`;

const Vectors = styled.div`
  position: absolute;
  & > .react {
    position: absolute;
    z-index: 1;
    left: 5%;
    top: 90px;
  }

  & > .star {
    position: absolute;
    left: 5.22%;
    top: 6.18%;
  }
`;

export default { Container, Logo, Title, Img, ContainerInfos, Text, Vectors };
