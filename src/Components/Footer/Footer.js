import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="details">
        <h3>&copy; Youtube-movie</h3>
        <div className="contact">
        <Link to="/" style={{"text-decoration": "none"}}>
          <span>Contact us</span>
          </Link>
          <Link to="/" style={{"text-decoration": "none"}}>
          <span>About us</span>
          </Link>
          <Link to="/" style={{"text-decoration": "none"}}>
          <span>Social Media</span>
        </Link>
          
        </div>
      </div>
      <span  id = "made">Made using React</span>
    </div>
  );
};

export default Footer;
