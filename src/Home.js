import React from "react";
// import './index.css';
import "./Home.css";
import Header from "./Header";
import Social from "./Social";
import ContentsContainer from "./ContentsContainer";

class Home extends React.Component {
  render() {
    return (
      <div id="content-inner">
        <Header section="header" />
        <ContentsContainer />
        {/* <Social /> */}
      </div>
    );
  }
}

export default Home;
