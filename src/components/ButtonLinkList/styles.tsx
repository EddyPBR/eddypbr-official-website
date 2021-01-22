import styled from "styled-components";

export const ListInline = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  li {
    margin: 0 1.5rem;
    list-style: none;
  }

  a {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.purple};
    padding: 0 0.6rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.purple};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s, color 0.2s;

    :hover {
      color: ${(props) => props.theme.colors.title};
      background-color: ${(props) => props.theme.colors.purple};
    }
  }
`;
