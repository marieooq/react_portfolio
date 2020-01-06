import React from "react";
import Header from "./Header";
import worksImage from "./img/about_photo.jpg";
import "./App.css";
import "./Works.css";
import Content_image1 from "./img/react_note.png";
import Content_image2 from "./img/host_family.png";
import { Link } from "react-router-dom";

class Works extends React.Component {
  render() {
    const sections = { title1: "/work1", title2: "/work2" };

    return (
      <div className="works-wrapper">
        <Header section="about" imgSrc={worksImage} />
        <div className="works">
          <WorkContent
            myTitle="React based To-Do List"
            myURL={sections.title1}
            myImg={Content_image1}
          />
          <WorkContent
            myTitle="Illustration"
            myURL={sections.title2}
            myImg={Content_image2}
          />
        </div>
      </div>
    );
  }
}

const WorkContent = props => {
  return (
    <div className="content">
      <p className="content-title">{props.myTitle}</p>
      <Link to={props.myURL}>
        <img className="content-img" src={props.myImg}></img>
      </Link>
    </div>
  );
};

export default Works;
