import React from 'react';
import './Home.css';
import Layout from '../../components/Layout';
// import Header from '../../components/Header';
import HomeContents from './HomeContents';

const Home = () => {
  return (
    <Layout section="header">
      <HomeContents />
    </Layout>
  );
};

export default Home;
