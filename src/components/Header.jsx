import React from 'react';
import SpeechBubble from '../img/speech_bubble.gif';
import Background from '../img/header.jpg';
import './Header.scss';

const Header = props => {
  if (props.section === 'header') {
    // const links = {
    //   Resume: '/MarieOtaki_resume.pdf',
    //   Email: 'mailto:otakimarie@gmail.com',
    //   LinkedIn: 'https://www.linkedin.com/in/marieotaki/',
    //   GitHub: 'https://github.com/marieooq'
    // };

    // const snsLinks = Object.keys(links).map((keyName, index) => {
    //   return (
    //     <li key={index}>
    //       <a href={links[keyName]} target="_blank" rel="noopener noreferrer">
    //         <i className="fab fa-github"></i>
    //       </a>
    //     </li>
    //   );
    // });
    return (
      <header>
        <div className="main-img">
          <a href="/MarieOtaki_resume.pdf" target="_blank">
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
              <span id="name">Marie Otaki</span> is a{' '}
              <span id="job-title">Front-end developer</span> based in
              Vancouver.
            </h1>
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
                  href="https://github.com/marieooq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/marieooq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  } else if (props.section === 'about') {
    return (
      <header className="about-header">
        <img src={props.imgSrc} alt="about" id="about_photo" />
      </header>
    );
  } else if (props.section === 'work') {
    return (
      <header className="work-header">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img src={props.imgSrc} alt="work" id="work-photo" />
        </a>
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
  } else if (props.section === 'blog') {
    return (
      <header className="work-header">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img src={props.imgSrc} alt="work" id="work-photo" />
        </a>
      </header>
    );
  }
};

export default Header;
