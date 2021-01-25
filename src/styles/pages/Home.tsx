import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  min-height: 72rem;
  background: linear-gradient(rgba(7, 2, 29, 0.4), rgba(7, 2, 29, 0.6)),
    url("/assets/unknow-planet-illustration.jpg"), no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;

  > h1 {
    font: 3.2rem "Roboto" bold;
    color: ${(props) => props.theme.colors.title};
    margin-top: 3.6rem;
  }

  > h2 {
    margin-top: 1.5rem;
    font: 2.4rem "Roboto";
    color: ${(props) => props.theme.colors.text};
  }

  > img {
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    opacity: 0.9;
  }

  > ul {
    margin: 4.8rem 0;
  }
`;

export const Container = styled.div`
  width: 90vw;
  min-height: 100vh;
  max-width: 117rem;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
