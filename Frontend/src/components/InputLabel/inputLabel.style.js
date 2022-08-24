import styled from "styled-components";

const Label = styled.label`
  border-radius: 20px;
  border: 2px solid var(${({ theme }) => theme.color.secondary});
  padding: 5px;
  max-width: 300px;
  min-width: 190px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  cursor: text;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.2rem;
  border: none;
  outline: none;
  margin-left: 3px;
  color: var(${({ theme }) => theme.color.text});
`;

export default { Label, Input };
