import styled from "styled-components";

export const LinkButton = styled.a`
  max-height: 5rem;
  min-height: 4.4rem;
  max-width: 18rem;
  min-width: 12rem;
  padding: 1.4rem;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.title};
  background-color: ${(props) => props.theme.colors.purpleDark};
  transition: filter 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    filter: brightness(.8);
  }
`;
