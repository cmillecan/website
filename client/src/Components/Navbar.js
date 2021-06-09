import React from "react";
import "./Navbar.css";
import { NavLink, Switch, Route } from "react-router-dom";
// import bytes from "../images/notesandbytes2.svg";

const NavBar = () => {
  const li = [
    {
      link: "/about",
      text: "About",
    },
    {
      link: "/portfolio",
      text: "Portfolio",
    },
    {
      link: "/blog",
      text: "Blog",
    },
  ];

  return (
    <div className="navBar">
      <div className="nav-row">
        <Switch>
          <Route path="/blog">
            <div className="blog-title">
              {/*<img*/}
              {/*  className="bytes"*/}
              {/*  src={bytes}*/}
              {/*  alt="constance millecan website logo"*/}
              {/*/>*/}
              NOTES & BYTES
            </div>
          </Route>
          <Route path="/">
            <div className="blog-title">CONSTANCE MILLECAN</div>
          </Route>
        </Switch>
        <ul className="links">
          {li.map((objLink, i) => {
            return (
              <li key={i}>
                <NavLink activeClassName="active" to={objLink.link}>
                  {objLink.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
