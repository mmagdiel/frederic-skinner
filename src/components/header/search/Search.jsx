import React, { useState } from "react";
import clsx from "clsx";
import "./styles.css";

function Search() {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => setIsHidden(!isHidden);
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search..."
        className={clsx("search_input", { hidden: isHidden })}
      />
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        className="search_icon"
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.4951 22.9902C22.908 22.9902 20 20.0822 20 16.4951C20 12.908 22.908 10 26.4951 10C30.0822 10 32.9902 12.908 32.9902 16.4951C32.9902 17.996 32.4811 19.3781 31.6261 20.4779L36 24.8518L34.8518 26L30.4779 21.6261C29.3781 22.4811 27.996 22.9902 26.4951 22.9902ZM31.3665 16.4951C31.3665 19.1855 29.1855 21.3664 26.4952 21.3664C23.8048 21.3664 21.6239 19.1855 21.6239 16.4951C21.6239 13.8048 23.8048 11.6238 26.4952 11.6238C29.1855 11.6238 31.3665 13.8048 31.3665 16.4951Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export { Search };
