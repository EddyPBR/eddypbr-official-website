import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: flex-start;
  margin-top: 4rem;
  max-width: 1170px;
  align-self: center;
  width: 100vw;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90vw;

    && > nav {
      margin-top: 4rem;
    }
  }
`;

export const Column = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ColumnTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  color: ${(props) => props.theme.colors.title};

  @media (max-width: 600px) {
    margin-bottom: .4rem;
  }
`;

export const ListOfLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  margin: 2rem;

  li {
    list-style: none;
    margin-bottom: 0.8rem;
    width: 100%;
  }

  a { text-decoration: none;
    font: 400 1.4rem "Roboto", sans-serif;
    color: ${(props) => props.theme.colors.text};
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(1.4);
  }

  @media (max-width: 600px) {
    li { 
      text-align: center;
    }
  }

`;

export const SocialListOfLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.2rem;

  li {
    list-style: none;
    margin: 0 1rem;
  }

  li:first-child {
    margin-left: 0;
  }

  li:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.purpleDark};
    width: 3rem;
    height: 3rem;
    border: 0.16rem solid ${(props) => props.theme.colors.purple};
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.title};
    transition: background 0.3s, color 0.3s, border-color 0.3s;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  a:hover {
    background-color: ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.title};
    border-color: ${(props) => props.theme.colors.purpleDark};
  }

  a svg {
    color: ${(props) => props.theme.colors.purple};
    transition: color 0.3s;
  }

  a:hover svg {
    color: ${(props) => props.theme.colors.title};
  }
`;

export const Details = styled.div`
  margin-bottom: 0.8rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
  align-self: center;

  span {
    font: 400 1.4rem "Roboto", sans-serif;
    color: ${(props) => props.theme.colors.text};
    line-height: 2.2rem;
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: crimson;
  }

  @media (max-width: 600px) {
    text-align: center;
    margin-top: 8rem;
  }
`;

export const Button = styled.a`
  max-height: 4rem;
  min-height: 4rem;
  max-width: 18rem;
  min-width: 12rem;
  padding: 1.4rem;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.title};
  background-color: ${(props) => props.theme.colors.greenDark};
  transition: background-color 0.2s, color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${(props) => props.theme.colors.green};
    color: #FFF;
  }
`