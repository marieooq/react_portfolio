import React from 'react';
import SpeechBubble from '../img/speech_bubble.gif';
import Background from '../img/header.jpg';
import './Header.scss';

const Header = (props) => {
  if (props.section === 'header') {
    return (
      <header>
        <div className="main-img">
          <a href="/MarieOtaki_Resume.pdf" target="_blank">
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
              Hi! I'm <span id="name">Marie Otaki,</span>
              <br />
              <span id="job-title">a Frontend developer.</span>
            </h1>
            <p>
              Skilled in JavaScript, React, Redux, jQuery, TypeScript, Node.js,
              HTML5, CSS3, SaSS, Mongodb, MySQL.
              <br />
              <br />I am a Frontend developer who is passionate about building
              in JavaScript (including React) and also hands-on User Experience
              design. Ping me if you are interested!
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/marieooq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/marieotaki/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://marieotaki.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-medium-m"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/marie_otaki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="/MarieOtaki_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-file-pdf"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:otakimarie@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  } else if (props.section === 'work_ph') {
    return (
      <header className="work-ph-header">
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          id="link_msgif"
        >
          <>
            <a
              href="https://www.producthunt.com/posts/msgif?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-msgif"
              target="_blank"
              rel="noopener noreferrer"
              id="productHunt_msgif"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=183178&theme=light"
                alt="Msgif - A GIF generator that converts your message into a GIF | Product Hunt Embed"
              />
            </a>
          </>
          <img src={props.imgSrc} alt="work" id="work-ph-photo"></img>
        </a>
      </header>
    );
  } else {
    return (
      <header className="about-header">
        <img src={props.imgSrc} alt="about" id="about_photo" />
      </header>
    );
  }
};

export default Header;
