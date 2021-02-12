import styled from "styled-components";

interface IArticleProps {
  isRight?: boolean;
}

export const ArticleContent = styled.article<IArticleProps>`
  width: 90vw;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isRight ? "flex-end" : "flex-start")};
  margin: 0 auto;
  margin-top: 12rem;

  > h1 {
    color: ${(props) => props.theme.colors.purple};
    text-align: ${(props) => (props.isRight ? "right" : "left")};
  }

  > p {
    margin-top: 1rem;
    max-width: 67rem;
    line-height: 2.8rem;
    text-align: ${(props) => (props.isRight ? "right" : "left")};
  }

  > div {
    margin-top: 8rem;
  }
`;
