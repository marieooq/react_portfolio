import React from "react";
import Header from "./Header";
import About_image from "./img/about_photo.jpg";
import "./App.css";
import "./About.css";
import axios from "axios";
import { isTSEnumDeclaration } from "@babel/types";
import ProfileImg from "./img/profile_photo.png";

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

    return (
      <div>
        <div className="about">
          <Header section="about" imgSrc={About_image} />
          <h2>About me</h2>
          <div className="about-inner">
            <div className="profile-image">
              <img src={ProfileImg} alt="profile"></img>
            </div>
            <div className="about-description">
              I'm Marie Otaki, rased in Japan and based in Vancouver. After
              getting through various kinds of careers I’ve decided to go back
              to a student to be a web developer. Now I'm studying front-end
              technologies like HTML, CSS, JavaScript and React.js. I'm also
              interested in UI design, so I'd like to work as a web developer
              who can understand visual design as well. I'm earger to learn new
              technology.
              <br></br>
              {/* <a className="resume-btn" href="#">Resume</a> */}
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
