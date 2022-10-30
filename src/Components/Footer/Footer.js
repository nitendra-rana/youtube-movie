import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="details">
        <h3>&copy; Movies</h3>
        <div className="contact">
        <Link to="/" style={{"textDecoration": "none"}}>
          <span>Contact us</span>
          </Link>
          <Link to="/" style={{"textDecoration": "none"}}>
          <span>About us</span>
          </Link>
          <Link to="/" style={{"textDecoration": "none"}}>
          <span>Social Media</span>
        </Link>
          
        </div>
      </div>
      <span  id = "made">Made using React</span>
    </div>
  );
};

export default Footer;
