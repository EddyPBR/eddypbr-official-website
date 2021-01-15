import React from "react";
import Head from "next/head";

import { Container } from "../styles/pages/Home";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>homepage</title>
      </Head>

      <Container>
        <h1>Hello EddyPBR</h1>
        <p>Setup with nextjs + react + lint + prettier + typescript is done!</p>
      </Container>
    </div>
  );
};

export default Home;
