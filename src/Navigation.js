import React from "react";
import "./App.css";
import "./Navigation.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

class Navigation extends React.Component {
  render() {
    const sections = { Home: "/", Work: "/work", About: "/about" };

    const navLinks = Object.keys(sections).map(keyName => {
      return (
        <li>
          <Link to={sections[keyName]}>{keyName}</Link>
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
          <ul>{navLinks}</ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
