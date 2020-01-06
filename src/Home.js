import React from "react";
// import './index.css';
import "./Home.css";
import Header from "./Header";
import Social from "./Social";
import HomeContents from "./HomeContents";
import ContentsContainer from "./ContentsContainer";

class Home extends React.Component {
  render() {
    return (
      <div id="content-inner">
        <Header section="header" />
        <HomeContents />
        {/* <Social /> */}
      </div>
    );
  }
}

export default Home;
