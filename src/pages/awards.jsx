import React from "react";
import { Layout, Header } from "../components";
import OnConstruction from "../vectors/onConstruction.svg";

export default function awards() {
  return (
    <Layout isSidebar={false}>
      <Header />
      <OnConstruction />
    </Layout>
  );
}
