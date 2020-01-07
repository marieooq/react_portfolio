import React from "react";
import "./App.css";
import Header from "./Header";
import WorkTemplate from "./WorkTemplate";
import Content_image1 from "./img/reactToDo_demo.gif";

const tags = ["HTML", "CSS", "JavaScript", "React.js"];

const tagList = tags.map(elm => {
  return <li>{elm}</li>;
});

const relatedWebsites = {
  "Visit the website": "https://reactnote-93fb1.web.app/",
  Medium:
    "https://medium.com/@marieotaki/i-dont-know-what-react-exactly-is-although-i-ve-created-an-app-using-it-e0aaf7dcabc5"
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
  img: { Content_image1 },
  title: "React based To-Do List",
  subTitle: "A simple to Do List using React.js and Firebase",
  description:
    "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. I posted an article on Medium about what I struggled creating this app. Please check it out if you’d like to know more about it.",
  tags: { tagList },
  howItWorks:
    "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. I posted an article on Medium about what I struggled creating this app. Please check it out if you’d like to know more about it.",
  difficultPart:
    "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. I posted an article on Medium about what I struggled creating this app. Please check it out if you’d like to know more about it.",
  problemSolving:
    "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. I posted an article on Medium about what I struggled creating this app. Please check it out if you’d like to know more about it.",
  url:
    "https://medium.com/@marie_woq/i-dont-know-what-react-exactly-is-although-i-ve-created-an-app-using-it-e0aaf7dcabc5",
  url_title: "Medium"
};

class Work1 extends React.Component {
  render() {
    return (
      <div>
        <Header section="work" imgSrc={Content_image1} />
        <WorkTemplate
          img={workObj.img}
          title={workObj.title}
          subTitle={workObj.subTitle}
          tags={tagList}
          description={workObj.description}
          howItWorksDescription={workObj.howItWorks}
          difficultPartDescription={workObj.difficultPart}
          problemSolvingDescription={workObj.problemSolving}
          relatedWebsitesLists={relatedWebsitesLists}
        />
      </div>
    );
  }
}

export default Work1;
