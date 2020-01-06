import React from "react";
import Header from "./Header";
import worksImage from "./img/about_photo.jpg";
import "./App.css";
import "./Blog.css";
import ContentsContainer from "./ContentsContainer";
import Content_image1 from "./img/react_note.png";
import Content_image2 from "./img/host_family.png";
import axios from "axios";

class Blog extends React.Component {
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
    const articleLists = this.state.articles.map(item => {
      return (
        <div className="blog-inner">
          <div className="blog-image">
            <a href={item.link}>
              <img src={item.thumbnail} alt="blog-thumbnail"></img>
            </a>
          </div>
          <div className="blog-description">
            <h3>{item.title}</h3>
            <p>{item.pubDate.slice(0, 10)}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="works-wrapper">
        <Header section="about" imgSrc={worksImage} />
        {/* <ContentsContainer obj={contentsObj} /> */}
        <div className="blog">
          <div className="blog-wrapper">{articleLists}</div>
        </div>
      </div>
    );
  }
}

export default Blog;
