import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

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
  display: grid;
  padding: 10px;
  gap: 30px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(190px, ${({ columns }) => (columns ? "1fr" : "250px")})
  );
  width: 100%;
  margin: 0 auto;
`;

export default {
  Container,
  Header,
  Title,
  SectionCourses,
};
