import React from "react";
import Content from "./Content";
import Content_image1 from "./img/react_note.png";
import Content_image2 from "./img/host_family.png";
import "./ContentsContainer.css";

class ContentsContainer extends React.Component {
  render() {
    const contentsObj = [
      {
        title: "React based To-Do List",
        description:
          "This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ",
        url: "/work1"
      },
      {
        title: "Illustration",
        description:
          "The illustration is drawn using illustrator. I drew it to express my gratitude.  I traced a picture of the family that host father keep it affectionately. Using the same tone of colors enables it looks organized. The yellow used in background color expresses the brightness they have.",
        url: "/work2"
      }
    ];
    return (
      <div className="contents_wrapper">
        <div className="contents-inner">
          <Content
            imageSrc={Content_image1}
            myTitle={contentsObj[0].title}
            myDescription={contentsObj[0].description}
            myURL={contentsObj[0].url}
          />

          <Content
            imageSrc={Content_image2}
            myTitle={contentsObj[1].title}
            myDescription={contentsObj[1].description}
            myURL={contentsObj[1].url}
          />
        </div>
      </div>
    );
  }
}

export default ContentsContainer;
