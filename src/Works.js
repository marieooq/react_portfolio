import React from "react";
import Header from "./Header";
import worksImage from "./img/works.png";
import "./App.css";
import "./Works.css";
import ContentsContainer from "./ContentsContainer";
import MessageGif_image from "./img/messagif.gif";
import Photomap_image from "./img/photomap.png";
import VanstudentBlog_image from "./img/vanstudents_blog.png";
import ReactNote_image from "./img/react_note.png";
import Illustration_image from "./img/host_family.png";

class Works extends React.Component {
  render() {
    const contentsObj = [
      {
        image: MessageGif_image,
        title: "Msgif",
        description:
          "A gif generator that converts your message into a GIF animation. Once you type your message and press a button your message turns into a GIF animation. ",
        url: "/work1"
      },
      {
        image: Photomap_image,
        title: "Photomap via twitter",
        description:
          "This app enables to locate the photos of my twitter timeline on the world map. It uses twitter API to get data like image, location and published time.",
        url: "/work1"
      },
      {
        image: VanstudentBlog_image,
        title: "React based blog",
        description:
          "A blog introducing life in Vancouver to Japanese visitors. It is using React.js and Contentful API. ",
        url: "/work1"
      },
      {
        image: ReactNote_image,
        title: "React based To-Do List",
        description:
          "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ",
        url: "/work1"
      },
      {
        image: Illustration_image,
        title: "Illustration",
        description:
          "The illustration is drawn using illustrator. I drew it to express my gratitude.  I traced a picture of the family that host father keep it affectionately. Using the same tone of colors enables it looks organized. The yellow used in background color expresses the brightness they have.",
        url: "/work2"
      }
    ];

    return (
      <div className="works-wrapper">
        <Header section="about" imgSrc={worksImage} />
        <ContentsContainer obj={contentsObj} />
      </div>
    );
  }
}

export default Works;
