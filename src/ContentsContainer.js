import React from "react";
import Content from "./Content";
// import Content_image1 from "./img/react_note.png";
// import Content_image2 from "./img/host_family.png";
import "./ContentsContainer.css";

const ContentsContainer = props => {
  const contentLists = props.obj.map((obj, index) => {
    return (
      <Content
        imageSrc={obj.image}
        myTitle={obj.title}
        myDescription={obj.description}
        myURL={obj.url}
      />
    );
  });
  return (
    <div className="contents_wrapper">
      <div className="contents-inner">{contentLists}</div>
    </div>
  );
};

export default ContentsContainer;
