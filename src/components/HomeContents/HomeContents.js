import React, { useState } from 'react';
import worksList from '../../setting/worksList';
import ContentsContainer from '../../components/ContentContainer/ContentsContainer';

const HomeContents = () => {
  const [project, setProject] = useState('all');
  const handleChange = (e) => {
    setProject(e.target.value);
  };

  //take out the object if its featured property's value equals true
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
