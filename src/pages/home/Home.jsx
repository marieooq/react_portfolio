import React from 'react';
import './Home.css';
import Header from '../../components/Header';
import HomeContents from './HomeContents';

const Home = () => {
  return (
    <div id="content-inner">
      <Header section="header" />
      <HomeContents />
    </div>
  );
};

export default Home;
