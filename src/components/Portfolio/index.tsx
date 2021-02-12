import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

import {
  PortfolioBox,
  FigureColumn,
  ContentColumn,
  PortfolioLink,
} from "./styles";

interface IPortfolioProps {
  title: string;
  subtitle: string;
  text: string;
  img_url: string;
  portfolio_link?: string;
}

const Portfolio = (props: IPortfolioProps) => {
  const { title, subtitle, img_url, portfolio_link } = props;
  return (
    <PortfolioBox>
      <FigureColumn>
        <img src={img_url} alt={title} />
      </FigureColumn>
      <ContentColumn>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {portfolio_link ? (
          <PortfolioLink
            href={portfolio_link}
            rel="noopener noreferrer external"
            target="_blank"
          >
            <span>Ver portfólio</span>
            <FiArrowRightCircle />
          </PortfolioLink>
        ) : null}
      </ContentColumn>
    </PortfolioBox>
  );
};

export default Portfolio;
