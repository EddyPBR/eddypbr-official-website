import styled from "styled-components";

export const SectionContent = styled.section`
  margin-top: 10.6rem;

  img {
    width: 100%;
    max-width: 55rem;
  }

  h1 {
    color: ${(props) => props.theme.colors.purple};
  }

  p {
    margin-top: 2rem;
  }

  a {
    margin-top: 5rem;
  }

  @media (max-width: 1170px) {
    margin-top: 8rem;

    h1 {
      margin-top: 8rem;
    }
  }
`;

export const Container = styled.div`
  width: 90vw;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;

  @media (max-width: 1170px) {
    display: flex;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
