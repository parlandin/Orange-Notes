import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  padding: ${({ padding }) => (padding ? padding : "5px")};
  color: ${({ color }) => (color ? color : "#1E1E1E")};
  background-color: ${({ backgroudFill }) =>
    backgroudFill ? "#FF5F19" : "transparent"};
  border: ${({ backgroudFill }) =>
    backgroudFill ? "none" : "1px solid #FF5F19t"};
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #ff5f19cc;
  }

  & span {
    font-weight: 500;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 19px;
  margin-left: 5px;
`;

export default { Button, Icon };
