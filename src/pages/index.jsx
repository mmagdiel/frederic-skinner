import React from "react";
import { Hero, Layout, Header } from "../components";

export default function Home() {
  return (
    <Layout isSidebar isHero>
      <Header />
      <Hero />
    </Layout>
  );
}
