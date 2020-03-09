import React from 'react';
import Header from '../../components/Header';
import BlogImage from '../../img/pages/blog.png';
// import worksImage from "./img/about_photo.png";
import './Blog.scss';
import axios from 'axios';

class Blog extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const mediumRssFeed = 'https://medium.com/feed/@marieotaki';
    const rssToJsonApi = 'https://api.rss2json.com/v1/api.json';
    const data = { params: { rss_url: mediumRssFeed } };
    axios.get(rssToJsonApi, data).then(res => {
      this.setState({ articles: res.data.items });
    });
  }

  render() {
    const articleLists = this.state.articles.map((item, index) => {
      return (
        <div className="blog-inner" key={index}>
          <div className="blog-image">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.thumbnail} alt="blog-thumbnail"></img>
            </a>
          </div>
          <div className="blog-description">
            <h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h3>
            <p>{item.pubDate.slice(0, 10)}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="works-wrapper">
        <Header section="blog" imgSrc={BlogImage} />
        <div className="blog">
          <div className="blog-wrapper">{articleLists}</div>
        </div>
      </div>
    );
  }
}

export default Blog;
