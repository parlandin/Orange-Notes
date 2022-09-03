import styled, { css } from "styled-components";

const Container = styled.div``;

const Header = styled.div`
  padding: 10px 10px 0;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  margin-right: 10px;
`;

const SectionCourses = styled.div`
  display: flex;
  padding: 10px;
`;

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

const CourseCard = styled.a`
  text-decoration: none;
  box-shadow: 1px 1px 3px #e0dcdcf0, 1px 1px 3px #e0dcdcf0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

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
  height: 120px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const CardTitle = styled.h3`
  padding: 5px;
  color: #1f1f1f;
  margin-top: 10px;
`;

export default {
  Container,
  Header,
  Title,
  SectionCourses,
  CourseCard,
  CardImg,
  CardTitle,
};
