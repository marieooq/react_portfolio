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
        return item.content;
      })

      console.log(contents);

      

      self.setState({
        articles: [{__html: contents}]
      })
    
      });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>About</h2>
        {this.state.articles.map(article => (
          <div dangerouslySetInnerHTML={article}/>
        ))}
      </div>
    );
  }
  
}

export default About;
