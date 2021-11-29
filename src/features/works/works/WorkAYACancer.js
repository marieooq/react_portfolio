import React from 'react';
import Layout from '../../../components/Layout/Layout';
import CompanyWorkTemplate from '../../../components/WorkTemplate/CompanyWorkTemplate';
import HeaderImage from '../../../img/aya_cancer_header.png';
import AYACancerImage from '../../../img/aya_cancer_image.png';

//////////////////////////////////////
// set values according to a project
//////////////////////////////////////
const workObj = {
  url: 'https://aya-cancer.com/',
  title: 'AYA Cancer Mobile App',
  description:
    'Built a Slack-like community service for people under the age of 39 with cancer (AYA: Adolescent and Young Adult) using Mattermost, an OSS. I was responsible for building a mobile app using React-native. My position was completely remote.',
  headline: 'What I worked on',
};

const tags = ['React Native'];

const images = [AYACancerImage];

const achievements = [
  'Built a Slack-like community service for people under the age of 39 with cancer using Mattermost, an OSS; I was responsible for building a mobile app using React-native.',
  'Coded following a comprehensive design layout in Adobe XD.',
  'Created forms and communicated and displayed them with the database in AWS lambda.',
  ' Communicated closely with teammates in Slack and got work done on time despite the time difference with Japan',
  'Managed tasks in Github assignments.',
];

const relatedWebsites = {
  'AYA Cancer Community': 'https://aya-cancer.com/',
};
//////////////////////////////////////
//////////////////////////////////////

const tagList = tags.map((elm, index) => <li key={index}>{elm}</li>);

const imageList = images.map((elm, index) => (
  <img src={elm} alt="contentImg" className="content-img" key={index} />
));

const achievementList = achievements.map((elm, index) => (
  <li key={index}>{elm}</li>
));

const relatedWebsitesLists = Object.keys(relatedWebsites).map(
  (keyName, index) => (
    <li key={index}>
      <a
        href={relatedWebsites[keyName]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {keyName}
      </a>
    </li>
  )
);

const WorkAYACancer = () => (
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

export default WorkAYACancer;
