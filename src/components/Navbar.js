import React from "react";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch, FaEllipsisV, FaCamera } from "react-icons/fa";
export default function Navbar() {
  const [line, setLine] = useState("1");
  const [showResults, setShowResults] = useState(false);
  const handleClickResults = () => {
    if (showResults === false) setShowResults(true);
    else if (showResults === true) setShowResults(false);
  };
  return (
    <>
      <div className="green-container">
        <div className="green-sub1">
          <h4>Whatsapp</h4>
          <div className="green-search">
            <IconContext.Provider value={{ color: "white" }}>
              <FaSearch />
            </IconContext.Provider>
          </div>
          <div className="green-comments" onClick={handleClickResults}>
            <IconContext.Provider value={{ color: "white" }}>
              <FaEllipsisV />
            </IconContext.Provider>
          </div>
          {showResults && <div className="dots-clicked"></div>}
        </div>
        <div className="green-sub2">
          <IconContext.Provider value={{ className: "camera-icon" }}>
            <FaCamera />
          </IconContext.Provider>
          <div className="main-nav">
            <div onClick={() => setLine("1")}>
              <Link to="/chats" style={{ textDecoration: "none" }}>
                <h3 style={{ color: "white" }}>Chats</h3>
              </Link>
            </div>
            <div onClick={() => setLine("2")}>
              <Link to="/status" style={{ textDecoration: "none" }}>
                <h3 style={{ color: "white" }}>Status</h3>
              </Link>
            </div>
            <div onClick={() => setLine("3")}>
              <Link to="/calls" style={{ textDecoration: "none" }}>
                <h3 style={{ color: "white" }}>Calls</h3>
              </Link>
            </div>
          </div>
          {line === "1" && <div className="dyline-1"></div>}
          {line === "2" && <div className="dyline-2"></div>}
          {line === "3" && <div className="dyline-3"></div>}
        </div>
      </div>
    </>
  );
}
