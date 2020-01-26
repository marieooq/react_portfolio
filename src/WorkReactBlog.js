import React from "react";
import "./App.css";
import Header from "./Header";
import WorkTemplate from "./WorkTemplate";
import HeaderImage from "./img/vanstudents_header.png";
import ContentImage1 from "./img/react_blog_demo1.png";

const tags = ["HTML5", "CSS3", "JavaScript", "React.js"];

const tagList = tags.map(elm => {
  return <li>{elm}</li>;
});

const images = [ContentImage1];

const imageList = images.map(elm => {
  return <img src={elm} alt="contentImg" className="content-img" />;
});

const relatedWebsites = {
  "Visit the website": "https://vanstudents.com/"
};

const relatedWebsitesLists = Object.keys(relatedWebsites).map(keyName => {
  return (
    <li>
      <a
        href={relatedWebsites[keyName]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {keyName}
      </a>
    </li>
  );
});

const workObj = {
  img: { HeaderImage },
  url: "https://vanstudents.com/",
  title: "React based blog",
  description:
    "A blog introducing life in Vancouver to Japanese visitors. It is using React.js and Contentful API.",
  tags: { tagList },
  howItWorks:
    "Since this blog is using Contentful API (headless CMS) it fetch the published data from the API and display them. If you tap the each article you can read more detail.",
  difficultPart:
    "It is needed to jump to a page that displays an individual article when the user tap the article link on the home page. It was a bit challenging for me because I display a certain component when jumping to another link.",
  problemSolving:
    "I used URL Parameters in React router to solve the problem. Like “/article/:slug”, providing a certain slug under the article it enables to direct to a specific article page."
};

class WorkReactBlog extends React.Component {
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

export default WorkReactBlog;
