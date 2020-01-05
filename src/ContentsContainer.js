import React from "react";
import Content from "./Content";
import Content_image1 from "./img/react_note.png";
import Content_image2 from "./img/host_family.png";
import "./ContentsContainer.css";

class ContentsContainer extends React.Component {
  render() {
    const contentsObj = [
      {
        image: Content_image1,
        title: "React based To-Do List",
        description:
          "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ",
        url: "/work1"
      },
      {
        image: Content_image2,
        title: "Illustration",
        description:
          "The illustration is drawn using illustrator. I drew it to express my gratitude.  I traced a picture of the family that host father keep it affectionately. Using the same tone of colors enables it looks organized. The yellow used in background color expresses the brightness they have.",
        url: "/work2"
      }
    ];

    const contentLists = contentsObj.map((obj, index) => {
      console.log(obj.image);
      return (
        <Content
          imageSrc={obj.image}
          myTitle={contentsObj[index].title}
          myDescription={contentsObj[index].description}
          myURL={contentsObj[index].url}
        />
      );
    });
    return (
      <div className="contents_wrapper">
        <div className="contents-inner">{contentLists}</div>
      </div>
    );
  }
}

export default ContentsContainer;
