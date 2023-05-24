import React from "react";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { HiDocumentMinus } from "react-icons/hi2";
import "./SidePanel.css";

const SidePanel = () => {
  return (
    <section className="side-panel">
      <div>
        <ul className="panel-nav">
          <div className="nav-link">
            <BsBoundingBoxCircles className="nav-icon" />
            <li>Projets</li>
          </div>
          <div className="nav-link">
            <MdDashboard className="nav-icon" />
            <li>Dashboard</li>
          </div>
          <div className="nav-link">
            <AiFillCalendar className="nav-icon" />
            <li>Calendar</li>
          </div>
          <div className="nav-link">
            <BsChatSquareDotsFill className="nav-icon" />
            <li>Chat</li>
          </div>
          <div className="nav-link">
            <HiDocumentMinus className="nav-icon" />
            <li>Documentation</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default SidePanel;
