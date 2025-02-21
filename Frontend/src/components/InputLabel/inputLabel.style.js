import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LabelText = styled.span`
  font-size: 1.1rem;
  margin-bottom: 5px;
  margin-left: 2px;
  color: var(${({ theme }) => theme.color.text});
`;

const InputWrapper = styled.div`
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "20px"};
  border: 2px solid var(${({ theme }) => theme.color.secondary});
  padding: 5px;
  max-width: 350px;
  min-width: 190px;
  width: 100%;
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

const ButtonEye = styled.button`
  color: var(${({ theme }) => theme.color.secondary});
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
`;

export default { ButtonEye, Label, InputWrapper, Input, LabelText };
