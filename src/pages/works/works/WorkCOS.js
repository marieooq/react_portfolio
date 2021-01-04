import React from 'react';
import Layout from '../../../components/Layout/Layout';
import CompanyWorkTemplate from '../../../components/WorkTemplate/CompanyWorkTemplate';
import HeaderImage from '../../../img/hoikupedia_header.png';
import HoikupediaImage1 from '../../../img/hoikupedia_faq.gif';
import HoikupediaImage2 from '../../../img/hoikupedia_school_list.gif';
import HoikupediaImage3 from '../../../img/hoikupedia_thumbnails.png';

//////////////////////////////////////
// set values according to a project
//////////////////////////////////////
const workObj = {
  url: 'https://hoikupedia.com/',
  title: 'Hoikupedia Web Design & Development',
  description:
    'COS Educational Consulting, Inc. is a study abroad agent, which provides recruitment and immigration services to local partners. I designed and coded new webpages using HTML, CSS, JavaScript, WordPress, Figma, and Adobe Illustrator for the owned media called "Hoikupedia" for those who want to be a nanny in Vancouver.',
  headline: 'What I worked on',
};

const tags = ['JavaScript', 'HTML', 'CSS', 'Figma', 'Adobe Illustrator'];

const images = [HoikupediaImage1, HoikupediaImage2, HoikupediaImage3];

const achievements = [
  'Designed and coded new webpages using HTML, CSS, JavaScript, and WordPress for an owned media for people who want to nanny in Vancouver.',
  'Communicated closely with the CEO to understand the issues the company was facing and put ideas into a concrete plan.',
  'Analyzed the website using Google Analytics to determine what needed to be improved.',
  'Created a comprehensive design layout using Figma.',
  'Used Adobe Illustrator to create a diagnostic table that shows the procedure for traveling abroad for SVG images.',
  'Converted more than 600 data in the spreadsheet to JSON files and displayed them on a web page for users to easily and intuitively understand.',
];

const relatedWebsites = {
  Hoikupedia: 'https://hoikupedia.com/',
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

const WorkCOS = () => (
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

export default WorkCOS;
