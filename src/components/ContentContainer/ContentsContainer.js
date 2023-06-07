import React from "react";
import Content from "../Content/Content";
import "./ContentsContainer.css";
import SimpleSelect from "../../components/Select/SimpleSelect";

const ContentsContainer = (props) => {
  const returnFilteredObject = (filteringWord, projectArray) => {
    if (filteringWord === "all") {
      return projectArray;
    } else if (filteringWord === "featured") {
      const filteredObj = projectArray.filter((val) => val.featured);
      return filteredObj;
    } else {
      const filteredObj = projectArray.filter(
        (val) => val.project === filteringWord
      );
      return filteredObj;
    }
  };

  const filteredObj = returnFilteredObject(props.project, props.obj);

  const contentLists = filteredObj.map((obj, index) => {
    return <Content contentObj={obj} key={index} />;
  });
  return (
    <div className="contents_wrapper">
      <div className="contents-inner">
        <SimpleSelect
          project={props.project}
          handleChange={props.handleChange}
        />
        {contentLists}
      </div>
    </div>
  );
};

export default ContentsContainer;
