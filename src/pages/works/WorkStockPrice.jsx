import React from 'react';
import Header from '../../components/Header';
import WorkTemplate from './WorkTemplate';
import HeaderImage from '../../img/photomap_header.png';
import ContentImage1 from '../../img/photomap_demo1.png';
import ContentImage2 from '../../img/photomap_demo2.png';

const tags = ['HTML5', 'CSS3', 'TypeScript', 'React', 'Ant Design'];

const images = [ContentImage1, ContentImage2];

const tagList = tags.map((elm, index) => {
  return <li key={index}>{elm}</li>;
});

const imageList = images.map((elm, index) => {
  return <img src={elm} alt="contentImg" className="content-img" key={index} />;
});

const relatedWebsites = {
  GitHub: 'https://github.com/marieooq/stock-price-list'
};

const relatedWebsitesLists = Object.keys(relatedWebsites).map(
  (keyName, index) => {
    return (
      <li key={index}>
        <a
          href={relatedWebsites[keyName]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {keyName}
        </a>
      </li>
    );
  }
);

const workObj = {
  img: { HeaderImage },
  url: 'https://github.com/marieooq/stock-price-list',
  title: 'Stock Price List',
  description:
    'A simple SPA application that enables to display the stock symbol, the latest price and the desctiption. Once you type in the symbol and hit the enter or press the search button, these information show up.',
  tags: { tagList },
  howItWorks:
    'Note: This app fetches the photos data from only my  own timeline for now. I’m planning to update it so that everyone can use it. Once I post a photo with location data on my twitter timeline, this app is going to fetch the data and display it on the map.If you tap the each photo, you can find detail information.',
  difficultPart:
    'At the beginning, I used search method in Twitter API that I can fetch the timeline data if it has a certain hashtag. However there is limitation that the API provides the data with hashtag if it was posted within 7 days. Another problem is when I hit the endpoint of Twitter API from client side, there was a CORS problem.',
  problemSolving:
    'I gave up the idea to filter the timeline data with a hash tag. I fetch the data if it has location data instead.To solve the CORS issue I used Express, the framework of Node,js. More specifically, I used api.use(cors()).'
};

class WorkStockPrice extends React.Component {
  render() {
    return (
      <div>
        <Header section="work" imgSrc={HeaderImage} url={workObj.url} />
        <WorkTemplate
          title={workObj.title}
          subTitle={workObj.subTitle}
          tags={tagList}
          description={workObj.description}
          howItWorksDescription={workObj.howItWorks}
          contentImage={imageList}
          difficultPartDescription={workObj.difficultPart}
          problemSolvingDescription={workObj.problemSolving}
          relatedWebsitesLists={relatedWebsitesLists}
        />
      </div>
    );
  }
}

export default WorkStockPrice;
