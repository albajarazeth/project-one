import React, { useState } from "react";
import SidePanel from "../components/SidePanel";
import MainNav from "../components/MainNav";
import "./Home.css";

const Home = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <section className="home-container">
      <button onClick={toggleMenu}>---</button>
      {/* {showMenu && <SidePanel />} */}
      <SidePanel toggle={showMenu} />
      <div className="right-nav ">
        <MainNav />
      </div>
      <div className="content">
        <h3>somn</h3>
      </div>
    </section>
  );
};

export default Home;
