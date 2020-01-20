import React from "react";
import SpeechBubble from "./img/speech_bubble.gif";
import Background from "./img/header.jpg";
import "./Header.scss";

const Header = props => {
  if (props.section === "header") {
    return (
      <header>
        <div className="main-img">
          <a href="/MarieOtaki-resume.pdf" target="_blank">
            <img
              src={SpeechBubble}
              alt="speech-bubble"
              id="speech-bubble"
            ></img>
          </a>
          <img src={Background} alt="main" id="profile-photo"></img>
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
    return (
      <header className="about-header">
        <img src={props.imgSrc} alt="about" id="about_photo" />
      </header>
    );
  } else if (props.section === "work") {
    return (
      <header className="work-header">
        <img src={props.imgSrc} alt="work" id="work-photo" />
      </header>
    );
  }
};

export default Header;
