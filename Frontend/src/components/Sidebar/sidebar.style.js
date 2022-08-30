import styled from "styled-components";

const Container = styled.div`
  min-width: 55px;
  height: calc(100vh - 55px);
  overflow: hidden;
  position: relative;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  transition: width 300ms ease-in-out;
  background-color: #fff;
  z-index: 1;
  align-items: flex-start;
  width: ${({ isOpen }) => (isOpen ? "190px" : "55px")};
  height: 100%;
  position: fixed;
  overflow: hidden;
  border-right: 1px solid rgba(0, 0, 0, 0.21);
  padding-top: 10px;
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
      color: #972906;
    }

    &:hover {
      color: #201f22;
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
  transition: opacity 400ms ease-in-out;
  white-space: nowrap;
`;

export default { Container, Menu, Item, Text, Icon };
