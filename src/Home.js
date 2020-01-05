import React from "react";
// import './index.css';
import "./Home.css";
import Header from "./Header";
import Social from "./Social";
import Contents from "./Contents";

class Home extends React.Component {
  render() {
    return (
      <div id="content-inner">
        <Header title="Portfolio" />
        <Contents />
        {/* <Social /> */}
      </div>
    );
  }
}

export default Home;
