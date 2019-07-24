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
          link: item.link
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


      

      self.setState({
        // articles: [contents]
        titles: [titleArray],
        thumbnails: [thumbnailArray],
        links: [linkArray]
      })
    
      });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>About</h2>
        <div>{this.state.titles}</div>
        <a href={this.state.links}><img src={this.state.thumbnails}></img></a>
          {/* {this.state.articles.map(article => (
          <div>{article[0]}</div>
        ))} */}
      </div>
    );
  }
  
}

export default About;
