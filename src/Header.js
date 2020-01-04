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
              <span>Marie Otaki</span> is a software developer based in
              Vancouver.
            </h1>
            {/* <Link to="/about">{this.props.button}</Link> */}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
