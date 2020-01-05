import React from "react";
import Background from "./img/header.jpg";
import "./Header.css";
// import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from "react-router-dom";

const Header = props => {
  if (props.section === "header") {
    console.log("this is header.");
    return (
      <header>
        <div className="main-img">
          <img src={Background} alt="main"></img>
        </div>
        <div className="introduction">
          <div className="introduction-inner">
            <h1>
              <span id="name">Marie Otaki</span> is a{" "}
              <span id="job-title">software developer</span> based in Vancouver.
            </h1>
          </div>
        </div>
      </header>
    );
  } else if (props.section === "about") {
    console.log("this is not header");
    return (
      <header className="about-header">
        <img src={props.imgSrc} alt="about" id="about_photo" />
      </header>
    );
  }
};

export default Header;
