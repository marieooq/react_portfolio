import React from 'react';
import ContentsContainer from '../../components/ContentsContainer';
import worksList from '../../setting/worksList.js';

const HomeContents = () => {
  //take out an object if its featured property's value equals true
  const featuredWorkList = worksList.filter((val) => val.featured);

  return <ContentsContainer obj={featuredWorkList} />;
};

export default HomeContents;
