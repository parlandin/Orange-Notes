import styled from "styled-components";

const Container = styled.div`
  min-height: 500px;
  width: 100%;
  z-index: 1;

  @media (max-width: 570px) {
    min-height: 380px;
  }

  position: absolute;
  & > .react {
    position: absolute;
    right: 15%;
    top: 23.36%;
  }

  & > .star {
    position: absolute;
    left: 5.22%;
    top: 6.18%;
  }

  & > .star1 {
    position: absolute;
    right: 13.26%;
    top: 11.58%;
  }

  & > .star2 {
    position: absolute;
    left: 25.43%;
    bottom: 20.66%;
  }

  & > .a {
    position: absolute;
    right: 6.94%;
    top: 3.91%;
  }

  & > .a1 {
    position: absolute;
    right: 18.67%;
    bottom: 13.17%;
  }

  & > .book2 {
    position: absolute;
    left: 11.09%;
    top: 24.13%;
  }

  & > .booktrans {
    position: absolute;
    right: 27.94%;
    top: 30%;
  }

  & > .booktrans1 {
    position: absolute;
    bottom: 30%;
    left: 43.86%;
  }

  & > .brain {
    position: absolute;
    right: 4.78%;
    bottom: 26.64%;
  }

  & > .brain1 {
    position: absolute;
    right: 40%;
    bottom: 15.25%;
  }

  & > .date {
    position: absolute;
    top: 22.39%;
    left: 42.17%;
  }

  & > .eng {
    position: absolute;
    right: 3.7%;
    top: 43.82%;
  }

  & > .molec {
    position: absolute;
    left: 5.22%;
    bottom: 7.72%;
  }

  & > .res {
    position: absolute;
    right: 15%;
    bottom: 42.28%;
  }

  & > .res1 {
    position: absolute;
    bottom: 4.63%;
    left: 44.13%;
  }

  & > .root {
    position: absolute;
    top: 45.94%;
    right: 18.7%;
  }

  & > .book {
    position: absolute;
    left: 5%;
    bottom: 26.64%;
  }
`;

export default Container;
