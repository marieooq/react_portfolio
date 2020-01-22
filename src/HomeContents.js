import React from "react";
// import Content from "./Content";
import ContentsContainer from "./ContentsContainer";
import MessageGif_image from "./img/messagif.gif";
import Photomap_image from "./img/photomap.png";
import VanstudentBlog_image from "./img/vanstudents_blog.png";
import ReactNote_image from "./img/react_note.png";
import Illustration_image from "./img/host_family.png";
import "./ContentsContainer.css";

class HomeContents extends React.Component {
  render() {
    const contentsObj = [
      {
        image: MessageGif_image,
        title: "Msgif: git generator",
        description:
          "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ",
        url: "/work1"
      },
      {
        image: Photomap_image,
        title: "Photomap via twitter",
        description:
          "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ",
        url: "/work1"
      },
      {
        image: VanstudentBlog_image,
        title: "React based blog",
        description:
          "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ",
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

    return <ContentsContainer obj={contentsObj} />;
  }
}

export default HomeContents;
