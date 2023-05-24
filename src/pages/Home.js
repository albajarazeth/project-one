import React from "react";
import SidePanel from "../components/SidePanel";
import MainNav from "../components/MainNav";
import "./Home.css";

const Home = () => {
  return (
    <section className="grid-container">
      <div className="left-nav">
        <SidePanel />
      </div>
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
