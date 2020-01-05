import React from "react";
import Background from "./img/header.jpg";
import "./Header.css";
// import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
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
  }
}

export default Header;
