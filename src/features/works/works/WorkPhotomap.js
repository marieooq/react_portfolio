import React from 'react';
import Layout from '../../../components/Layout/Layout';
import WorkTemplate from '../../../components/WorkTemplate/WorkTemplate';
import HeaderImage from '../../../img/photomap_header.png';
import ContentImage1 from '../../../img/photomap_demo1.png';
import ContentImage2 from '../../../img/photomap_demo2.png';

const tags = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Firebase'];

const images = [ContentImage1, ContentImage2];

const tagList = tags.map((elm, index) => {
  return <li key={index}>{elm}</li>;
});

const imageList = images.map((elm, index) => {
  return <img src={elm} alt="contentImg" className="content-img" key={index} />;
});

const relatedWebsites = {
  'Visit the website': 'https://photos-mapping.web.app/',
  GitHub: 'https://github.com/marieooq/react-photomap-public',
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
  url: 'https://photos-mapping.web.app/',
  title: 'Photomap',
  description:
    'This app enables to locate the photos of my twitter timeline on the world map. It uses twitter API to get data like image, location and published time, To show those data on the map it uses Mapbox API as well. Front-end side is used React and back-end side is used Node.js and Firebase. ',
  tags: { tagList },
  howItWorks:
    'Note: This app fetches the photos data from only my  own timeline for now. I’m planning to update it so that everyone can use it. Once I post a photo with location data on my twitter timeline, this app is going to fetch the data and display it on the map.If you tap the each photo, you can find detail information.',
  difficultPart:
    'At the beginning, I used search method in Twitter API that I can fetch the timeline data if it has a certain hashtag. However there is limitation that the API provides the data with hashtag if it was posted within 7 days. Another problem is when I hit the endpoint of Twitter API from client side, there was a CORS problem.',
  problemSolving:
    'I gave up the idea to filter the timeline data with a hash tag. I fetch the data if it has location data instead.To solve the CORS issue I used Express, the framework of Node,js. More specifically, I used api.use(cors()).',
};

const WorkPhotomap = () => (
  <Layout section="work" imgSrc={HeaderImage} url={workObj.url}>
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
  </Layout>
);

export default WorkPhotomap;
