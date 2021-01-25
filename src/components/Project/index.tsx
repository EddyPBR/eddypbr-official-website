import React from "react";
import {
  ProjectBox,
  ContentColumn,
  FigureColumn,
  ProjectLink,
  Row
} from "./styles";
import { FiGithub, FiFigma, FiGlobe } from "react-icons/fi";

interface IProjectProps {
  title: string;
  text: string;
  project_link?: string;
  github_url?: string;
  figma_url?: string;
  web_url?: string;
  img_url: string;
}

const Project: React.FC<IProjectProps> = (props) => {
  const { title, text, github_url, figma_url, web_url, img_url, project_link } = props;

  return (
    <ProjectBox>
      <FigureColumn>
        <img src={img_url} alt={title} />
      </FigureColumn>
      <ContentColumn>
        <h1>{title}</h1>
        <p>{text}</p>
        <Row>
          {github_url && (
            <ProjectLink
              href={github_url}
              rel="noopener noreferrer external"
              target="_blank"
            >
              <FiGithub />
            </ProjectLink>
          )}
          {figma_url && (
            <ProjectLink
              href={figma_url}
              rel="noopener noreferrer external"
              target="_blank"
            >
              <FiFigma />
            </ProjectLink>
          )}
          {web_url && (
            <ProjectLink
              href={web_url}
              rel="noopener noreferrer external"
              target="_blank"
            >
              <FiGlobe />
            </ProjectLink>
          )}
        </Row>
      </ContentColumn>
    </ProjectBox>
  );
};

export default Project;
