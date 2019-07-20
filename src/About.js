import React from 'react';
import './App.css';
import './About.css';
import axios from "axios";

// const axios = require('axios');

// axios.get('https://medium.com/feed/@marie_woq')
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });
let articles = [];
async function getMediumFeed() {
	try {
		const mediumRssFeed = "https://medium.com/feed/@marie_woq";
		const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
    const data = { params: { rss_url: mediumRssFeed } };
    console.error("Medium RSS reader is working.");
		return await axios.get(rssToJsonApi, data);
	} catch (error) {
		console.error(error.message);
	}
}

getMediumFeed().then(res => {
  console.log(res.data.items);

}).catch(err => {
  console.log(err);
})


class About extends React.Component{
  render() {
    return (
      <div>
        <h2>About</h2>
        {articles}
      </div>

    );
  }
}

export default About;
