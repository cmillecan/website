import React from "react";
import "./Footer.css";
import flower from "../images/koreanflower.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img src={flower} alt="constance millecan website logo" />
        <p> © 2021 Design by Constance Millecan</p>
      </div>
    </div>
  );
};

export default Footer;
