import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import BlogImage from '../../img/blog.png';
import './Blog.scss';
import axios from 'axios';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const mediumRssFeed = 'https://medium.com/feed/@marieotaki';
    const rssToJsonApi = 'https://api.rss2json.com/v1/api.json';
    const data = { params: { rss_url: mediumRssFeed } };
    axios.get(rssToJsonApi, data).then((res) => {
      setArticles(res.data.items);
    });
  }, []);
  const articleLists = articles.map((item, index) => {
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
    <Layout section="blog" imgSrc={BlogImage}>
      <div className="blog">
        <div className="blog-wrapper">{articleLists}</div>
      </div>
    </Layout>
  );
};

export default Blog;
