import "./styles.css";
import clsx from "clsx";
import React from "react";
import { Sidebar } from "../sidebar/Sidebar";

function Layout({ children, isHero, isSidebar }) {
  return (
    <div className={clsx("content", { content_bg: isHero })}>
      <main className="main">{children}</main>
      {isSidebar && <Sidebar />}
    </div>
  );
}

export { Layout };
