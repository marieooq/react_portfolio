import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import worksImage from '../../img/works.png';
import './Works.css';
import ContentsContainer from '../../components/ContentContainer/ContentsContainer';
import worksList from '../../setting/worksList';

const Works = () => {
  const [project, setProject] = useState('all');
  const handleChange = (e) => {
    setProject(e.target.value);
  };

  return (
    <Layout section="works" imgSrc={worksImage}>
      <ContentsContainer
        project={project}
        handleChange={handleChange}
        obj={worksList}
      />
    </Layout>
  );
};

export default Works;
