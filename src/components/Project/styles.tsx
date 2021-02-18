import styled from "styled-components";
import NextLink from "next/link";

export const ProjectBox = styled.div`
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
    max-width: 62rem;
    height: 34rem;
    mask: linear-gradient(
      145deg,
      rgba(7, 2, 29, 1) 0%,
      rgba(7, 2, 29, 0.5) 70.31%,
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
  margin-left: 3rem;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.green};
    margin-top: 0.5rem;
  }

  p {
    font-size: 1.6rem;
    margin-top: 2rem;
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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &&:first-child {
    margin-left: 0;
  }

  &&:last-child {
    margin-right: 0;
  }
`;

export const ProjectLink = styled.a`
  width: 4.2rem;
  height: 4.2rem;
  border: 0.2rem solid ${(props) => props.theme.colors.green};
  border-radius: 50%;
  margin: 0 1.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.colors.green};
    width: 2.6rem;
    height: 2.6rem;
  }

  span {
    transition: color 0.3s;
  }

  :hover {
    filter: brightness(1.3);
  }

  :hover > span {
    color: ${(props) => props.theme.colors.green};
  }

  @media (max-width: 1170px) {
    a {
      margin-top: 0rem;
    }
  }
`;


export const StyledNextLink = styled(NextLink)`
  text-decoration: none;
  transition: filter 0.2s;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font: 400 1.8rem "Roboto", sans-serif;
  color: ${(props) => props.theme.colors.green};

  span {
    font: 400 1.8rem "Roboto", sans-serif;
    color: ${(props) => props.theme.colors.text};
  }

  svg {
    width: 4rem;
    height: 4rem;
    margin-left: 2rem;
  }

  :hover {
    filter: brightness(1.3);
  }
`;

export const ToProjectLink = styled.a`
  text-decoration: none;
  margin-top: 4rem;
  transition: filter 0.2s;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    color: ${(props) => props.theme.colors.green};
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
    color: ${(props) => props.theme.colors.green};
  }

  @media (max-width: 1170px) {
    a {
      margin-top: 0rem;
    }
  }
`;