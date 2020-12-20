import React from 'react';
import ContentsContainer from '../../components/ContentsContainer';
import WorksList from '../../setting/WorksList';

const HomeContents = () => { 
  //take out an object if its featured property's value equals true
  const featuredWorkList = WorksList.filter(val => val.featured);
  
  return <ContentsContainer obj={featuredWorkList} />;
}

export default HomeContents;
