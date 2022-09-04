import styled, { css } from "styled-components";
const ContentBorder = css`
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 4px;
`;

const ContentBorderHover = css`
  height: 100%;
  width: 100%;
  border: 2px solid #ff5f19;
  transition: height 0.1s linear, width 0.1s linear 0.1s;
`;

const Container = styled.div`
  position: relative;
  text-decoration: none;
  box-shadow: 1px 1px 3px #e0dcdcf0, 1px 1px 3px #e0dcdcf0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  //max-width: 300px;

  &:before {
    ${ContentBorder}
    bottom: 0;
    left: 0;
  }

  &:after {
    ${ContentBorder}
    top: 0;
    right: 0;
  }

  &:hover {
    box-shadow: none;
  }

  &:hover::before {
    ${ContentBorderHover}
    border-right: none;
    border-bottom: none;
  }

  &:hover::after {
    ${ContentBorderHover}
    border-left: none;
    border-top: none;
  }
`;

const CardImg = styled.div`
  width: 100%;
  //height: 120px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0 10px;
`;

const CardTitle = styled.h3`
  color: #1f1f1f;
  margin-top: 10px;
  font-size: 0.9rem;
  width: calc(100% - 30px);
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-left: 5px;
`;

const Link = styled.a`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: transparent;
`;

const WrapperButton = styled.div`
  margin-top: 10px;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 4;
`;

const CardButton = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 0;
  z-index: 4;
  background-color: transparent;
  border: none;

  & svg {
    width: 23px;
    height: 29px;
  }
`;

export default {
  Container,
  CardImg,
  CardTitle,
  WrapperInfo,
  CardButton,
  WrapperButton,
  Link,
};
