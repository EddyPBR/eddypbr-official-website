import React from "react";
import NextLink from "next/link";

import {
  FooterStyle,
  Container,
  Column,
  ColumnTitle,
  ListOfLinks,
  SocialListOfLinks,
  Details,
  Button,
} from "./styles";

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiHeart,
} from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <Container>
        <Column>
          <ColumnTitle>MAPA DO SITE</ColumnTitle>
          <ListOfLinks>
            <li>
              <NextLink href="/">HOME</NextLink>
            </li>
            <li>
              <NextLink href="/sobre">SOBRE</NextLink>
            </li>
            <li>
              <NextLink href="/projetos">PROJETOS</NextLink>
            </li>
            <li>
              <NextLink href="/portfolio">PORTFOLIO</NextLink>
            </li>
            <li>
              <NextLink href="/blog">BLOG</NextLink>
            </li>
          </ListOfLinks>
        </Column>

        <Column>
          <ColumnTitle>OUTROS LINKS</ColumnTitle>
          <ListOfLinks>
            <li>
              <a
                href="https://www.ariushelp.com/"
                rel="noopener noreferrer external"
                target="_blank"
              >
                ÁRIUS-HELP
              </a>
            </li>
            <li>
              <a
                href="https://www.recode.org.br/"
                rel="noopener noreferrer external"
                target="_blank"
              >
                RECODE
              </a>
            </li>
            <li>
              <a
                href="https://www.rallymotos.net/"
                rel="noopener noreferrer external"
                target="_blank"
              >
                RALLY MOTOS
              </a>
            </li>
          </ListOfLinks>
        </Column>

        <Column>
          <SocialListOfLinks>
            <li>
              <a
                href="https://github.com/EddyPBR"
                rel="noopener noreferrer external"
                target="_blank"
              >
                <FiGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/edvaldo_junior_dev/"
                rel="noopener noreferrer external"
                target="_blank"
              >
                <FiInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://br.linkedin.com/in/edvaldojuniordev"
                rel="noopener noreferrer external"
                target="_blank"
              >
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/edvaldo.junior.906638"
                rel="noopener noreferrer external"
                target="_blank"
              >
                <FiFacebook />
              </a>
            </li>
          </SocialListOfLinks>
          <NextLink prefetch href="/contato" passHref>
            <Button>Contato</Button>
          </NextLink>
        </Column>
      </Container>
      <Details>
        <span>
          Alguns Direitos Reservados - Desenvolvido com <FiHeart size={10} />
          {" "}por Edvaldo Junior
        </span>
      </Details>
    </FooterStyle>
  );
};

export default Footer;
