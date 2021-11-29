import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navigation = () => {
  const clickHandle = () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
  };
  const sections = {
    Home: "/",
    Works: "/works",
    About: "/about",
    Blog: "/blog",
  };

  const navLinks = Object.keys(sections).map((keyName, index) => {
    return (
      <li key={index}>
        <Link to={sections[keyName]} onClick={clickHandle}>
          {keyName}
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <div id="nav-inner">
        <h2 className="logo">
          <Link to={sections.Home}>
            <img className="logo-icon" src={logo} alt="logo"></img>
          </Link>
        </h2>
        <div id="nav-toggle" onClick={clickHandle}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul id="global-nav">{navLinks}</ul>
      </div>
    </nav>
  );
};

export default Navigation;
