import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuCard = styled(Link)`
  text-decoration: none;
  color: #000;
  flex: 0 0 auto;
  padding: 10px;
  background-color: #00a9a55e;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;

  & p {
    font-size: 0.8rem;
    margin-top: 17px;
  }

  & .header {
    display: flex;
    align-items: center;
  }

  & h3 {
    font-weight: 600;
    font-size: 1rem;
  }

  & .icon {
    color: #ff5f19;
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease-in-out;
    margin-right: 3px;
  }

  &:hover {
    transform: translate(-1px, -1px);
    cursor: pointer;
    background-color: #00a9a54d;
  }
`;

export default { MenuCard };
