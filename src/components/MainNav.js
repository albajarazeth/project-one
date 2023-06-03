import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./MainNav.css";

const MainNav = ({ toggleMenu }) => {
  return (
    <nav className="main-nav">
      <button className="panel-btn" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default MainNav;
