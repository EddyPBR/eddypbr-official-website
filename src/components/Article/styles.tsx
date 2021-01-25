import styled from "styled-components";

export const ArticleContent = styled.article`
  width: 90vw;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 12rem;

  > h1 {
    color: ${(props) => props.theme.colors.purple};
  }

  > p {
    margin-top: 1rem;
    max-width: 67rem;
    line-height: 2.8rem;
  }

  > div {
    margin-top: 8rem;
  }
`;
