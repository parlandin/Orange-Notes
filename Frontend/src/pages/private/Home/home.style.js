import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.section`
  width: 100%;
  height: 200px;
`;

const SliderContainer = styled(Slider)`
  width: 100%;
`;

const Card = styled.div`
  background-color: rgba(0, 169, 165, 0.37);
  //width: 200px;
  //height: 200px;
  border-radius: 6px;
  position: relative;
  margin: 10px;

  & p {
    padding: 10px;
  }

  & span {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #861919;
  }
`;

export default { Container, Card, SliderContainer };
