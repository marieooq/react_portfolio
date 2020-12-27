import React, { useState } from 'react';
import Header from '../../components/Header';
import worksImage from '../../img/works.png';
import './Works.css';
import ContentsContainer from '../../components/ContentsContainer';
import worksList from '../../setting/worksList';

const Works = () => {
  const [project, setProject] = useState('all');
  const handleChange = (e) => {
    setProject(e.target.value);
  };

  return (
    <div className="works-wrapper">
      <Header section="about" imgSrc={worksImage} />
      <ContentsContainer
        project={project}
        handleChange={handleChange}
        obj={worksList}
      />
    </div>
  );
};

export default Works;
