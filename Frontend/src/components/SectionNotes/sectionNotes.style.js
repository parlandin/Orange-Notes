import styled from "styled-components";

const SectionNotes = styled.div`
  display: grid;

  &.gridActive {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(150px, 286px);

    @media (min-width: 200px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 1550px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 760px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 465px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const notFoud = styled.span`
  margin-left: 10px;
  color: #1e1e1ebd;
  font-size: 0.8rem;
`;

export default { SectionNotes, notFoud };
