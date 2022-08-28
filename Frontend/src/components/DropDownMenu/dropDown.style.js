import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.nav`
  position: absolute;
  width: 80px;
  height: 100px;
  border-radius: 6px;
  right: 2px;
  top: 60px;
  box-shadow: -1px 1px 3px 0px #bfb0b0, 1px -1px 3px 0px #bfb0b0;
  background-color: #fff;

  &:after {
    content: "";
    position: absolute;
    top: -5px;
    left: 45px;
    box-shadow: -1px -1px 1px 0px #978f8f8f;
    background-color: #fff;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7px;
`;

const Span = styled.span`
  font-size: 0.4rem;
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  color: #595757;
`;

const Item = styled(Link)`
  display: flex;
  border-bottom: 1px solid transparent;
  transition: all 200ms ease-in-out;
  text-decoration: none;
  color: #2c2c2c;
  margin: 3px 0;

  &:hover {
    border-bottom: 1px solid #ff5f19;
  }

  & span {
    margin-right: 3px;
  }
`;

export default { Container, List, Span, Item };
