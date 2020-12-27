import React, { useState } from 'react';
import ContentsContainer from '../../components/ContentsContainer';
import worksList from '../../setting/worksList';

const HomeContents = () => {
  const [project, setProject] = useState('all');
  const handleChange = (e) => {
    setProject(e.target.value);
  };

  //take out an object if its featured property's value equals true
  const featuredWorkList = worksList.filter((val) => val.featured);

  return (
    <ContentsContainer
      project={project}
      handleChange={handleChange}
      obj={featuredWorkList}
    />
  );
};

export default HomeContents;
