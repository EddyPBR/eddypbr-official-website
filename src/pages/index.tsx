import React from "react";
import Head from "next/head";

import { Header, Container } from "../styles/pages/Home";
import ButtonLinkList from "../components/ButtonLinkList";
import Section from "../components/Section";

import ManAnalyzingDataURL from "../assets/man-analyzing-data.png";
import AriusHelpLogoURL from "../assets/arius-help-logo.png";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>EddyPBR - Home</title>
      </Head>

      <Header>
        <Container>
          <img
            src="https://avatars2.githubusercontent.com/u/48658479?s=400&u=51365e1c6a53cb7c4a0741bb7dda1ebcf64d4417&v=4"
            alt="Edvaldo Junior"
          />
          <h1>Edvaldo Junior</h1>
          <h2>Desenvolvedor Fullstack</h2>

          <ButtonLinkList
            buttons={[
              { href: "https://github.com/EddyPBR", icon: "github" },
              {
                href: "https://www.instagram.com/edvaldo_junior_dev/",
                icon: "instagram",
              },
              {
                href: "https://br.linkedin.com/in/edvaldojuniordev",
                icon: "linkedin",
              },
              {
                href: "https://www.facebook.com/edvaldo.junior.906638",
                icon: "facebook",
              },
            ]}
          />
        </Container>
      </Header>

      <Section
        title="Edvaldo Junior"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        facilisis pellentesque pellentesque. Aliquam sagittis congue
        justo, et tristique dui eleifend tincidunt. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Praesent facilisis pellentesque
        pellentesque. Aliquam sagittis congue justo."
        btnLink="/sobre"
        btnText="Saiba mais"
        isBlank={false}
        imageURL={ManAnalyzingDataURL}
      />

      <Section
        title="Árius Help Startup"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
          dapibus dui, at lobortis lacus. Etiam vitae neque dui. Nullam
          pulvinar mattis tortor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In quis dapibus dui, at lobortis lacus. Etiam
          vitae neque dui. Nullam pulvinar mattis tortor."
        btnLink="https://www.instagram.com/ariushelp/"
        btnText="Saiba mais"
        isBlank={true}
        imageURL={AriusHelpLogoURL}
      />
    </>
  );
};

export default Home;
