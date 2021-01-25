import React from "react";
import { SectionContent, Container, Column } from "./styles";

import Button from "../Button";

interface ISection {
  title: string;
  text: string;
  imageURL: string;
  btnLink: string;
  btnText: string;
  isBlank: Boolean;
}

const Section: React.FC<ISection> = (props) => {
  const { title, text, imageURL, btnLink, btnText, isBlank = false } = props;

  return (
    <SectionContent>
      <Container>
        <Column>
          <img src={imageURL} alt={title} />
        </Column>
        <Column>
          <h1>{title}</h1>
          <p>{text}</p>
          <Button
            isFormButton={false}
            href={btnLink}
            rel={isBlank ? "noopener noreferrer external" : null}
            target={isBlank ? "blank" : null}
          >
            {btnText}
          </Button>
        </Column>
      </Container>
    </SectionContent>
  );
};
export default Section;
