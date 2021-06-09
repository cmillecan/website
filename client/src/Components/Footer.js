import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import flower from "../images/koreanflower.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img src={flower} alt="constance millecan website logo" />
        <p> © 2021 Constance Millecan</p>
      </div>
    </div>
  );
};

export default Footer;
