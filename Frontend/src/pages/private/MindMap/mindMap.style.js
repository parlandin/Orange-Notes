import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  padding: 10px 10px 0;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  margin-right: 10px;
`;

const Warning = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.1rem;
  color: #626060;
`;

export default { Container, Header, Title, Warning };
