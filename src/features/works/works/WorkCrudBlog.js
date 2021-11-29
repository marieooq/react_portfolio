import React from 'react';
import Layout from '../../../components/Layout/Layout';
import WorkTemplate from '../../../components/WorkTemplate/WorkTemplate';
import HeaderImage from '../../../img/crud_blog_header.png';
import ContentImage1 from '../../../img/crud_blog_demo1.png';
import ContentImage2 from '../../../img/crud_blog_demo2.png';
import ContentImage3 from '../../../img/crud_blog_demo3.png';
import ContentImage4 from '../../../img/crud_blog_demo4.png';

const tags = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'];

const images = [ContentImage1, ContentImage2, ContentImage3, ContentImage4];

const tagList = tags.map((elm, index) => {
  return <li key={index}>{elm}</li>;
});

const imageList = images.map((elm, index) => {
  return <img src={elm} alt="contentImg" className="content-img" key={index} />;
});

const relatedWebsites = {
  GitHub: 'https://github.com/marieooq/final-node-blog',
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
  url: 'https://github.com/marieooq/final-node-blog',
  title: 'CRUD blog application',
  description:
    'A CRUD blog application using React, Node.js, and MongoDB. It enables users to create, read, update, and delete the post of the blog. This is a team project. My role is building UI design and router that uses express(Node.js framework).',
  tags: { tagList },
  howItWorks:
    "This is a blog web application. Even if users don't have an account nor log in, all of them can read the articles that already posted. If users create an account and log in to this app, they can write a new article and update or delete the posts belong to them.",
  difficultPart:
    'This app was useful for me to understand the whole flow of the data, for it connects front-end, back-end, and database. However, it was a bit hard to understand it for the first time. In particular, the part of the connection back-end and database was difficult. Although it was not my role I hoped to understand the whole flow.',
  problemSolving:
    'I did read almost all the codes to better understand the structure keeping the MVC model in mind. Reading the documentation of express.js and mongoose was also useful for me.',
};

const WorkCrudBlog = () => (
  <div>
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
  </div>
);

export default WorkCrudBlog;
