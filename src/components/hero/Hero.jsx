import "./styles.css";
import React, { useState } from "react";
import { Detail } from "./detail/Detail";
import { Master } from "./master/Master";
import { tabs } from "./model";

function Hero() {
  const [index, setIndex] = useState(0);
  const { title, description, button } = tabs[index];
  const handleClick = (id) => (e) => {
    setIndex(id);
  };

  return (
    <section className="container hero">
      <Detail title={title} description={description} button={button} />
      <Master handleClick={handleClick} index={index} />
    </section>
  );
}

export { Hero };
