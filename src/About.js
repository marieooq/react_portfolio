import React from 'react';
import './App.css';
import './About.css';
import axios from "axios";
import { isTSEnumDeclaration } from '@babel/types';
import ProfileImg from './img/profile_photo.jpg';

class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const self = this;
    const mediumRssFeed = "https://medium.com/feed/@marie_woq";
    const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
    const data = { params: { rss_url: mediumRssFeed } };
    axios.get(rssToJsonApi, data).then(res => {
      console.log(res.data.items);
      let contents = [];
      contents = res.data.items.map(item => {
        return {
          title: item.title,
          thumbnail: item.thumbnail,
          link: item.link,
          date: item.pubDate
        }
        // return item.content;
      })

      
      let titleArray = [];
      titleArray = contents.map(obj => obj.title);

      let thumbnailArray = [];
      thumbnailArray = contents.map(obj => obj.thumbnail);

      let linkArray = [];
      linkArray = contents.map(obj => obj.link);

      let dateArray = [];
      dateArray = contents.map(obj => {
        const spaceIndex = obj.date.indexOf(' ');
        const publishDate = obj.date.slice(0, spaceIndex);
        return publishDate;
      });
      

      self.setState({
        // articles: [contents]
        titles: [titleArray],
        thumbnails: [thumbnailArray],
        links: [linkArray],
        dates: [dateArray]
      })
    
      });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="about">
          <h2>About me</h2>
          <div>
            {/* <img src={ProfileImg}></img> */}
          </div>
          <div className="about-me-description"></div>

        </div>

        <div className="medium">
          <h2>Medium</h2>
          <div className="card">
            <a href={this.state.links}>
              <img className="card-img" src={this.state.thumbnails}></img>
            </a>
            <div class="card-content clearfix">
              <div className="blog-title">{this.state.titles}</div>
              <p className="blog-date">{this.state.dates}</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
  
}

export default About;
