import "./styles.css";
import React from "react";
import { Link } from "gatsby";

function Detail({ title, description, button }) {
  const { label, to } = button;
  return (
    <div className="tab">
      <h1 className="tab_title">{title}</h1>
      <p className="tab_description">{description}</p>
      <Link to={to} className="tab_button">
        {label}
        <i className="fi-rs-angle-small-right"></i>
      </Link>
    </div>
  );
}

export { Detail };
