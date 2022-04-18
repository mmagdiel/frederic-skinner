import "./styles.css";
import React from "react";

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar_menu">
        <i className="fi-rs-align-right"></i>
      </div>
      <div className="sidebar_sticks">
        <a className="sidebar_sticks_item" href="#hero-1">
          1933 <i className="fi-rs-minus"></i>
        </a>
        <a className="sidebar_sticks_item" href="#hero-2">
          1968 <i className="fi-rs-minus"></i>
        </a>
        <a className="sidebar_sticks_item" href="#hero-3">
          1997 <i className="fi-rs-minus"></i>
        </a>
      </div>
    </nav>
  );
}

export { Sidebar };
