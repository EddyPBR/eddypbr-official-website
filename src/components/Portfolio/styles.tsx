import styled from "styled-components";
import NextLink from "next/link";

export const PortfolioBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  @media (max-width: 1170px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FigureColumn = styled.figure`
  img {
    width: 90vw;
    max-width: 70rem;
    height: 36rem;
    mask: linear-gradient(
      145deg,
      rgba(7, 2, 29, 1) 0%,
      rgba(7, 2, 29, 0.37) 70.31%,
      rgba(7, 2, 29, 0.25) 100%
    );
  }

  @media (max-width: 1170px) {
    img {
      height: auto;
    }
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.aquagreenDark};
    margin-top: 6rem;
    margin-left: -7rem;
  }

  p {
    font-size: 1.6rem;
    margin-top: 2rem;
    color: ${(props) => props.theme.colors.aquagreenDark};
  }

  p::before {
    content: "←";
    font-size: 3rem;
    color: var(--color-blue);
  }

  // Change the Row styles
  div {
    margin-top: 4rem;
    margin-left: -0.8rem;
    width: 100%;
  }

  @media (max-width: 1170px) {
    width: 90vw;
    max-width: 70rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    margin-top: 3rem;
    margin-left: 0;

    h1 {
      font-size: 3rem;
    }

    p {
      margin: 0;
      margin-top: 2rem;
    }
  }
`;

export const PortfolioLink = styled.a`
  text-decoration: none;
  margin-top: 12rem;
  margin-left: 2rem;
  transition: filter 0.2s;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.colors.aquagreen};
    width: 4rem;
    height: 4rem;
    margin-left: 2rem;
  }

  span {
    font: 400 1.8rem "Roboto", sans-serif;
    color: ${(props) => props.theme.colors.text};
    transition: color .2s;
  }

  :hover {
    filter: brightness(1.3);
  }

  :hover > span {
    color: ${(props) => props.theme.colors.aquagreen};
  }

  @media (max-width: 1170px) {
    a {
      margin-top: 0rem;
    }
  }
`;