import React from "react";
import Header from "./Header";
import About_image from "./img/about_photo.jpg";
import "./App.css";
import "./About.css";
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
    const createArticles = this.state.articles.map(item => {
      return (
        <div className="card">
          <a href={item.link}>
            <img
              className="card-img"
              src={item.thumbnail}
              alt="blog-thumbnail"
            ></img>
          </a>
          <div className="card-content clearfix">
            <div className="blog-title">{item.title}</div>
            <p className="blog-date">{item.pubDate.slice(0, 10)}</p>
          </div>
        </div>
      );
    });

    const links = {
      Resume: "#",
      Email: "#",
      LinkedIn: "https://www.linkedin.com/in/marie-otaki-a67773186/",
      GitHub: "https://github.com/marieooq"
    };

    const snsLinks = Object.keys(links).map(keyName => {
      return (
        <li>
          <a href={links[keyName]}>{keyName}</a>
        </li>
      );
    });

    return (
      <div>
        <div className="about-wrapper">
          <Header section="about" imgSrc={About_image} />

          <div className="about">
            <div className="about-inner">
              <section className="about-introduction">
                <h1>
                  <span role="img" aria-label="wave">
                    👋🏼{" "}
                  </span>
                  Hi, I'm Marie. I love to think about new ideas and solve
                  problems. Let's talk about topics like...{" "}
                </h1>
                <ul id="sns-links">{snsLinks}</ul>
              </section>
            </div>
          </div>
        </div>

        <div className="medium">
          <h2>Medium</h2>
          <div className="medium-inner">
            <div className="card-container">{createArticles}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
