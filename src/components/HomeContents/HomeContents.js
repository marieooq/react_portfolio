import React, { useState } from "react";
import worksList from "../../setting/worksList";
import ContentsContainer from "../../components/ContentContainer/ContentsContainer";

const HomeContents = () => {
  const [project, setProject] = useState("featured");
  const handleChange = (e) => {
    setProject(e.target.value);
  };

  return (
    <ContentsContainer
      project={project}
      handleChange={handleChange}
      obj={worksList}
    />
  );
};

export default HomeContents;
