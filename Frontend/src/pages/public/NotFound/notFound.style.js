import styled from "styled-components";
import Img from "../../../assets/images/wave.png";
import Img300 from "../../../assets/images/wave300.png";
import Img600 from "../../../assets/images/wave600.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 1005;
  height: 100vh;
  background-color: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperNotFound = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    font-size: 4rem;
    font-family: "Roboto", sans-serif;
    margin-bottom: 10px;
  }

  & p {
    margin-bottom: 10px;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;
  padding: 5px 9px;
  border: 1px solid #ff5f19;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #ff5f19;
  }
`;

const WrapperWave = styled.div`
  width: 100%;
  background-color: transparent;
  height: 100px;
  position: absolute;
  bottom: 0;

  &:after {
    position: absolute;
    inset: 0;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 850px) {
      background-image: url(${Img600});
    }

    @media (max-width: 562px) {
      background-image: url(${Img300});
    }
  }

  @media (max-width: 850px) {
    height: 80px;
  }

  @media (max-width: 562px) {
    height: 60px;
  }

  @media (max-width: 450px) {
    height: 30px;
  }
`;

export default { Container, WrapperWave, WrapperNotFound, Button };
