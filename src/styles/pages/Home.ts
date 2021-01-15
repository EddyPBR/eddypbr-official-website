import styled from "styled-components";

export const Container = styled.main`
  width: 90vw;
  min-height: 100vh;
  max-width: 117rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 102.4rem) {
    flex-direction: column;
  }

  h1 {
    font-size: 5.4rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: ${props => props.theme.colors.text};
    margin-top: 3rem;
  }
`;
