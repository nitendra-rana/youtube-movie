import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" style={{"textDecoration": "none"}}>
          <span className="name">Movies</span>
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
