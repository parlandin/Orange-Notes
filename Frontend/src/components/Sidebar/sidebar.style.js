import styled from "styled-components";

const Container = styled.div`
  width: ${({ isOpen }) => (isOpen ? "180px" : "55px")};
  height: calc(100vh - 55px);
  border-right: 1px solid rgba(0, 0, 0, 0.21);
  transition: width 300ms ease-in-out;
  overflow: hidden;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

const Item = styled.div`
  color: var(${({ theme }) => theme.color.secondary});
  margin: 15px 11px;

  & a {
    text-decoration: none;
    color: var(${({ theme }) => theme.color.secondary});
    display: flex;
    align-items: center;
    position: relative;

    &.active {
      &::after {
        content: "";
        transition: width 200ms ease-in-out;
        width: ${({ isOpen }) => (isOpen ? "100%" : "1.9rem")};
        position: absolute;
        height: 2px;
        background-color: #454c4f;
        bottom: -5px;
      }
    }
  }
`;

const Icon = styled.div`
  min-width: 1.7rem;
  width: 1.7rem;
  height: 1.7rem;
`;

const Text = styled.p`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  margin-left: 5px;
  font-size: 1rem;
  font-weight: 500;
  transition: opacity 200ms ease-in-out;
`;

export default { Container, Menu, Item, Text, Icon };
