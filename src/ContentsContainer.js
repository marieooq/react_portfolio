import React from "react";
import Content from "./Content";
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
