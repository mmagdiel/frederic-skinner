import "./styles.css";
import clsx from "clsx";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function Master({ handleClick, index }) {
  return (
    <section className="tabs">
      <article
        id={1}
        onClick={handleClick(1)}
        className={clsx("tabs_item", { active: index == 1 })}
      >
        <StaticImage
          alt="Skinner with bird"
          src="../../../images/skinner_with_bird.png"
        />
        <div className="overlay">
          <p className="overlay-text">Colaboraciones</p>
        </div>
      </article>
      <article
        id={2}
        onClick={handleClick(2)}
        className={clsx("tabs_item", { active: index == 2 })}
      >
        <StaticImage
          alt="rat for experiment"
          src="../../../images/rat_for_experiment.png"
        />
        <div className="overlay">
          <p className="overlay-text">Experimentos</p>
        </div>
      </article>
      <article
        id={3}
        onClick={handleClick(3)}
        className={clsx("tabs_item", { active: index == 3 })}
      >
        <StaticImage
          alt="Skinner Relaxing"
          src="../../../images/skinner_relaxing.png"
        />
        <div className="overlay">
          <p className="overlay-text">Teoría de Skinner</p>
        </div>
      </article>
    </section>
  );
}

export { Master };
