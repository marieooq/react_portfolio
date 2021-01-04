import React from 'react';
import Layout from '../../../components/Layout/Layout';
import CompanyWorkTemplate from '../../../components/WorkTemplate/CompanyWorkTemplate';
import HeaderImage from '../../../img/green_spoon_header.png';
import GreenSpoonImage from '../../../img/green_spoon_image.png';

//////////////////////////////////////
// set values according to a project
//////////////////////////////////////
const workObj = {
  url: 'https://green-spoon.jp/',
  title: 'Green Spoon',
  description:
    'Greenspoon Inc. is a Japanese startup company that offers high-quality fresh smoothies via e-commerce. My position was completely remote.',
  headline: 'What I worked on',
};

const tags = ['PHP Laravel', 'HTML', 'CSS'];

const images = [GreenSpoonImage];

const achievements = [
  'Built a payment emailing system using PHP Laravel, HTML, and CSS',
  "Coded a landing page according to Sketch's comprehensive layout",
  'Communicated closely with teammates in Slack to get work done on time, despite the time difference from Japan',
  'Managed tasks in asana like stock price and its description.',
];

const relatedWebsites = {
  'Green Spoon': 'https://green-spoon.jp/',
};
//////////////////////////////////////
//////////////////////////////////////

const tagList = tags.map((elm, index) => {
  return <li key={index}>{elm}</li>;
});

const imageList = images.map((elm, index) => {
  return <img src={elm} alt="contentImg" className="content-img" key={index} />;
});

const achievementList = achievements.map((elm, index) => {
  return <li key={index}>{elm}</li>;
});

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

const WorkGreenSpoon = () => (
  <Layout section="work" imgSrc={HeaderImage} url={workObj.url}>
    <CompanyWorkTemplate
      title={workObj.title}
      subTitle={workObj.subTitle}
      tags={tagList}
      description={workObj.description}
      headline={workObj.headline}
      achievementDescription={achievementList}
      contentImage={imageList}
      relatedWebsitesLists={relatedWebsitesLists}
    />
  </Layout>
);

export default WorkGreenSpoon;
