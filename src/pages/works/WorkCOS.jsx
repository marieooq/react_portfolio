import React from 'react';
import Header from '../../components/Header';
import CompanyWorkTemplate from './CompanyWorkTemplate';
import HeaderImage from '../../img/green_spoon_header.png';
import GreenSpoonImage from '../../img/green_spoon_image.png'

//////////////////////////////////////
// set values according to a project
//////////////////////////////////////
const workObj = {
  url: 'https://hoikupedia.com/',
  title: 'Web Development at COS Educational Consulting Inc.',
  description:
    'COS Educational Consulting, Inc. is a study abroad agent, which provides recruitment and immigration services to local partners. I designed and coded new webpages using HTML, CSS, JavaScript, WordPress, Figma, and Adobe Illustrator for an owned media called "Hoikupedia" for people who want to nanny in Vancouver.',
  headline: 'What I worked on'
};

const tags = ['JavaScript', 'Figma', 'Adobe Illustrator'];

const images = [
  GreenSpoonImage
];

const achievements = [
  "Designed and coded new webpages using HTML, CSS, JavaScript, and WordPress for an owned media for people who want to nanny in Vancouver.",
  "Communicated closely with the CEO to understand the issues the company was facing and put ideas into a concrete plan.",
  "Analyzed the website using Google Analytics to determine what needed to be improved.",
  "Created a comprehensive design layout using Figma.",
  "Used Adobe Illustrator to create a diagnostic table that shows the procedure for traveling abroad for SVG images.",
  "Converted more than 600 data in the spreadsheet to JSON files and displayed them on a web page for users to easily and intuitively understand."
];

const relatedWebsites = {
  'Hoikupedia': 'https://hoikupedia.com/'
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
  return <li key={index}>{elm}</li>
})

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


class WorkCOS extends React.Component {
  render() {
    return (
      <div>
        <Header section="work" imgSrc={HeaderImage} url={workObj.url} />
        <CompanyWorkTemplate
          title={workObj.title}
          subTitle={workObj.subTitle}
          tags={tagList}
          description={workObj.description}
          headline = {workObj.headline}
          achievementDescription={achievementList}
          contentImage={imageList}
          relatedWebsitesLists={relatedWebsitesLists}
        />
      </div>
    );
  }
}

export default WorkCOS;