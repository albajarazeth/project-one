import React, { useState } from "react";
import SidePanel from "../components/SidePanel";
import MainNav from "../components/MainNav";

import "./Home.css";

const Home = () => {
  const [showMenu, setShowMenu] = useState(true);
  const projects = ["preoject 1", "project 2"];
  const days = ["Monday", "Tuesday"];

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <section className="home-container">
      <MainNav toggleMenu={toggleMenu} />
      {/* {showMenu && <SidePanel />} */}
      <SidePanel toggle={showMenu} />
      <section className="home-content">
        <h2>Current work</h2>
        <div className="home-cards">
          {projects.map((el) => {
            return <div className="project-card">{el}</div>;
          })}
        </div>

        <h2>This week</h2>
        <div className="home-cards">
          {days.map((el) => {
            return <div className="day-card">{el}</div>;
          })}
        </div>

        <h2>Your items</h2>
        <div>
          <ul>
            <li>ticket #3</li>
            <li>ticket #9</li>
            <li>ticket #6</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Home;
