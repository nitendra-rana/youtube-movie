import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" style={{"text-decoration": "none"}}>
          <span className="name">Youtube-movie</span>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
