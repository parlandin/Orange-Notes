import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperGeneric = styled.div`
  margin: 15px 0;
  width: 100%;
  position: relative;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 2px solid var(${({ theme }) => theme.color.secondary});
  padding: 6px;
  max-width: 300px;
  width: 100%;
  color: var(${({ theme }) => theme.color.text});
  font-size: 1.4rem;
  cursor: pointer;
  font-weight: 600;
  margin: 20px 0;
`;

const LinkWithStyle = styled(Link)`
  border-bottom: 1px solid var(${({ theme }) => theme.color.secondary});
  text-decoration: none;
  color: var(${({ theme }) => theme.color.text});
  margin-top: 20px;
`;

const Span = styled.span`
  position: absolute;
  color: red;
  font-size: 0.8rem;
  bottom: -14px;
  left: 5px;
`;

const SpanErr = styled.p`
  position: absolute;
  color: #cc2525;
  font-size: 0.9rem;
  bottom: 126px;

  @media (max-width: 680px) {
    bottom: 150px;
    font-size: 1rem;
  }

  @media (max-width: 570px) {
    bottom: 153px;
    font-size: 1.1rem;
  }
`;

export default { Form, WrapperGeneric, Button, LinkWithStyle, Span, SpanErr };
