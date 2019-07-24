import React from 'react';
import './App.css';
import './About.css';
import axios from "axios";
import { isTSEnumDeclaration } from '@babel/types';

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

      console.log(contents);
      
      let titleArray = [];
      titleArray = contents.map(obj => obj.title);
      console.log(titleArray);

      let thumbnailArray = [];
      thumbnailArray = contents.map(obj => obj.thumbnail);
      console.log(thumbnailArray);

      let linkArray = [];
      linkArray = contents.map(obj => obj.link);
      console.log(linkArray);

      let dateArray = [];
      dateArray = contents.map(obj => {
        const spaceIndex = obj.date.indexOf(' ');
        const publishDate = obj.date.slice(0, spaceIndex);
        return publishDate;
      });
      console.log(dateArray);


      

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
        <h2>Medium</h2>
        <div className="card">
          <a href={this.state.links}>
            <img className="card-img" src={this.state.thumbnails}></img>
          </a>
          <div class="card-content">
            <div className="blog-title">{this.state.titles}</div>
            <p className="blog-date">{this.state.dates}</p>
          </div>
        </div>
      </div>
    );
  }
  
}

export default About;
