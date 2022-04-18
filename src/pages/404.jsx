import React from "react";
import { Layout, Header } from "../components";
import NotFound from "../vectors/onNotFound.svg";

export default function PageNotFound() {
  return (
    <Layout isSidebar={false}>
      <Header />
      <NotFound />
    </Layout>
  );
}
