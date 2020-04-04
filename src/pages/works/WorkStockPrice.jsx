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
    "This application uses the IEX Cloud API, which provides financial data like stock price and its description. Also, it uses React Hooks to manage a state. Since I'd like to make this app production-level quality, I decided to use TypeScript.",
  difficultPart:
    "When I hit the API's endpoint, it returned more than 8,000 data, which means it was too much to fetch all of them at once. I was wondering I would restrict the number of data to fetch. However, it would cause a bad user experience, so I needed an alternative idea.",
  problemSolving:
    'Since it was impossible to display all of the data from API when I hit the endpoint, I created a search function. When users type the symbol name and press the enter key, it shows the data matches that symbol. With Ant design, I could create this app without caring for the visual design too much.'
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
