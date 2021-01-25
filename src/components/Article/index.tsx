import React from "react";

import { ArticleContent } from "./styles";

interface IArticleProps {
  title: string;
  text: string;
}

const Article: React.FC<IArticleProps> = (props) => {
  const { title, text } = props;

  return (
    <ArticleContent>
      <h1>{title}</h1>
      <p>{text}</p>
      {props.children}
    </ArticleContent>
  );
};

export default Article;
