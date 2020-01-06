import React from "react";
import "./App.css";
import Header from "./Header";
import WorkTemplate from "./WorkTemplate";
import Content_image1 from "./img/work1.png";

const tags = ["HTML", "CSS", "JavaScript", "React.js"];

const tagList = tags.map(elm => {
  return <li>{elm}</li>;
});

const linkIcon = <ion-icon name="open"></ion-icon>;

class Work1 extends React.Component {
  render() {
    return (
      <div>
        <Header section="about" imgSrc={Content_image1} />
        <WorkTemplate
          img={Content_image1}
          title="React based To-Do List"
          description="This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. I posted an article on Medium about what I struggled creating this app. Please check it out if you’d like to know more about it."
          url="https://medium.com/@marie_woq/i-dont-know-what-react-exactly-is-although-i-ve-created-an-app-using-it-e0aaf7dcabc5"
          url_title="Medium"
          tags={tagList}
        />
      </div>
    );
  }
}

export default Work1;
