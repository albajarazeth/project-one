import React, { useState } from "react";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { HiDocumentMinus } from "react-icons/hi2";
import "./SidePanel.css";
import { useNavigate } from "react-router-dom";

const SidePanel = ({ toggle }) => {
  const navigate = useNavigate();
  const navigateToProjects = () => {
    navigate("./projects");
  };
  const navigateToDashboard = () => {
    navigate("./dashboard");
  };
  const navigateToCalendar = () => {
    navigate("./calendar");
  };
  const navigateToChat = () => {
    navigate("./chat");
  };
  const navigateToDocumentation = () => {
    navigate("./documentation");
  };

  return (
    <>
      <nav className={`side-panel ${toggle ? "panel-open" : "panel-closed"}`}>
        <div>
          <ul className="panel-nav">
            <div onClick={navigateToProjects} className="nav-link">
              <BsBoundingBoxCircles className="nav-icon" />
              <li>Projets</li>
            </div>
            <div onClick={navigateToDashboard} className="nav-link">
              <MdDashboard className="nav-icon" />
              <li>Dashboard</li>
            </div>
            <div onClick={navigateToCalendar} className="nav-link">
              <AiFillCalendar className="nav-icon" />
              <li>Calendar</li>
            </div>
            <div onClick={navigateToChat} className="nav-link">
              <BsChatSquareDotsFill className="nav-icon" />
              <li>Chat</li>
            </div>
            <div onClick={navigateToDocumentation} className="nav-link">
              <HiDocumentMinus className="nav-icon" />
              <li>Documentation</li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SidePanel;
