import React from "react";
import "./App.css";
import Header from "./Header";
import WorkTemplate from "./WorkTemplate";
import HeaderImage from "./img/msgif_header.png";
import ContentImage from "./img/msgif_demo.gif";

const tags = ["HTML5", "CSS3", "JavaScript", "React.js", "Redux"];

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
  img: { HeaderImage },
  title: "React based To-Do List",
  description:
    "This is a simple to do list using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved  even if it is refleshed. It is intuitive design and easy to manipulate. I posted an article on Medium about what I struggled creating this app. Please check it out if you’d like to know this project in detail.(The link is on the bottom of this page.)",
  tags: { tagList },
  howItWorks:
    "This a web app is using React.js for the frontend side, and Firebase for the backend side. When you type your task (anything you want) in the text box and press the add button it’ll show up as a to-do list. It is going to be registered in the database on Firebase as well. It is going to disappear when you press the “x” button on the upper right of each task, so does it on the Firebase as well. Since your tasks are preserved on the database in real-time they are going to be as they were, even if you refresh the browser.",
  difficultPart:
    "This is exactly my first project using React.js. Although I wrote codes looking at the tutorial, to be honest, I didn’t understand completely what React is after finishing the tutorial. So, I set my goal to that at least I figure the structure out.",
  problemSolving:
    "I worked on modifying visual design after completing the tutorial so that I could understand the structure. That was useful for me to grasp the structure, especially the concept of React components. I inspected the code by a developer tool and identified the component I’d like to modify, then modify each CSS file related to the component.",
  url:
    "https://medium.com/@marie_woq/i-dont-know-what-react-exactly-is-although-i-ve-created-an-app-using-it-e0aaf7dcabc5",
  url_title: "Medium"
};

class WorkReactBlog extends React.Component {
  render() {
    return (
      <div>
        <Header section="work" imgSrc={HeaderImage} url="https://msgif.net/" />
        <WorkTemplate
          title={workObj.title}
          subTitle={workObj.subTitle}
          tags={tagList}
          description={workObj.description}
          howItWorksDescription={workObj.howItWorks}
          contentImage={ContentImage}
          difficultPartDescription={workObj.difficultPart}
          problemSolvingDescription={workObj.problemSolving}
          relatedWebsitesLists={relatedWebsitesLists}
        />
      </div>
    );
  }
}

export default WorkReactBlog;
