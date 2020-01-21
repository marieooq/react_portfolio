import React from "react";
// import Content from "./Content";
import ContentsContainer from "./ContentsContainer";
import Content_image1 from "./img/messagif.gif";
import Content_image2 from "./img/react_note.png";
import Content_image3 from "./img/host_family.png";
import "./ContentsContainer.css";

class HomeContents extends React.Component {
  render() {
    const contentsObj = [
      {
        image: Content_image1,
        title: "Msgif: git generator",
        description:
          "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ",
        url: "/work1"
      },
      {
        image: Content_image2,
        title: "Photomap via twitter",
        description:
          "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ",
        url: "/work1"
      },
      {
        image: Content_image2,
        title: "React based blog",
        description:
          "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ",
        url: "/work1"
      },
      {
        image: Content_image2,
        title: "React based To-Do List",
        description:
          "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ",
        url: "/work1"
      },
      {
        image: Content_image3,
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
