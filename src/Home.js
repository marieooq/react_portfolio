import React from "react";
import "./Home.css";
import Header from "./Header";
import HomeContents from "./HomeContents";

class Home extends React.Component {
  render() {
    return (
      <div id="content-inner">
        <Header section="header" />
        <HomeContents />
      </div>
    );
  }
}

export default Home;
