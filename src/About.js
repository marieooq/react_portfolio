import React from "react";
import Header from "./Header";
import aboutImage from "./img/about_photo.png";
import "./App.css";
import "./About.scss";
import axios from "axios";
import { Link } from "react-router-dom";
// import { isTSEnumDeclaration } from "@babel/types";

class About extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const mediumRssFeed = "https://medium.com/feed/@marieotaki";
    const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
    const data = { params: { rss_url: mediumRssFeed } };
    axios.get(rssToJsonApi, data).then(res => {
      this.setState({ articles: res.data.items });
    });
  }

  render() {
    const links = {
      Resume: "/MarieOtaki-resume.pdf",
      Email: "mailto:otakimarie@gmail.com",
      LinkedIn: "https://www.linkedin.com/in/marie-otaki-a67773186/",
      GitHub: "https://github.com/marieooq"
    };

    const snsLinks = Object.keys(links).map(keyName => {
      return (
        <li>
          <a href={links[keyName]} target="_blank" rel="noopener noreferrer">
            {keyName}
          </a>
        </li>
      );
    });

    const topicsObj = {
      development: {
        emoji: (
          <span role="img" aria-label="laptop">
            💻{" "}
          </span>
        ),
        headline: "Software development",
        text:
          "I’m developing web apps using HTML5, CSS3, SCSS, JavaScript, React.js, and Redux. Especially I’ve been putting much effort into developing with React. I keep brushing up my developing skills."
      },
      idea: {
        emoji: (
          <span role="img" aria-label="note">
            🗒{" "}
          </span>
        ),
        headline: "Thinking new ideas",
        text:
          "I always take notes whatever grabs my attention, which make me come up with new idea for web apps. It also useful for solving problems even if it's a tiny one. Everything around me is hints for solving problems."
      },
      cooking: {
        emoji: (
          <span role="img" aria-label="fry-pan">
            🍳{" "}
          </span>
        ),
        headline: "Cooking",
        text:
          "I’m a good cooker. I can make a variety of food within limited ingredients. It’s like a puzzle. I love to try new taste so every time I face new meal I can get new hint to my recipe lists. The way of thinking helps me when I am coding as well.  "
      },
      traveling: {
        emoji: (
          <span role="img" aria-label="globe">
            🌎{" "}
          </span>
        ),
        headline: "Traveling",
        text:
          "Love to off to new world! Of all the countries I have visited, Laos and Vietnam are  my favorite! "
      }
    };

    const topicsLinks = Object.keys(topicsObj).map(keyName => {
      return (
        <div className="topic">
          <h2>
            {topicsObj[keyName].emoji} {topicsObj[keyName].headline}
          </h2>
          <p>{topicsObj[keyName].text}</p>
        </div>
      );
    });

    return (
      <div>
        <div className="about-wrapper">
          <Header section="about" imgSrc={aboutImage} />

          <div className="about">
            <div className="about-inner">
              <section className="about-introduction">
                <h1>
                  <span role="img" aria-label="wave">
                    👋🏼{" "}
                  </span>
                  I love to think about new ideas and solve problems. Let's talk
                  about topics like...
                </h1>
                <ul id="sns-links">{snsLinks}</ul>
              </section>

              <section className="about-topics">{topicsLinks}</section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
