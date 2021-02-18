import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  #__next {
    min-height: 100vh;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1.8rem "Roboto", sans-serif;
    color: ${(props) => props.theme.colors.title};
  }

  textarea:focus, input:focus, select:focus, button:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  p {
    font: 300 1.6rem "Open Sans", sans-serif;
    line-height: 3.2rem;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font: 700 3.6rem "Roboto", sans-serif;
    margin: 0;
  }

  @media (max-width: 1170px) {
    p {
      font: 300 1.6rem "Open Sans", sans-serif;
      line-height: 2.8rem;
      margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font: 700 3.2rem "Roboto", sans-serif;
      margin: 0;
    }
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
