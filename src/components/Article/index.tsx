import React from "react";

import { ArticleContent } from "./styles";

interface IArticleProps {
  title: string;
  text: string;
  isRight?: boolean;
}

const Article: React.FC<IArticleProps> = (props) => {
  const { title, text, isRight } = props;

  return (
    <ArticleContent isRight={isRight}>
      <h1>{title}</h1>
      <p>{text}</p>
      {props.children}
    </ArticleContent>
  );
};

export default Article;
