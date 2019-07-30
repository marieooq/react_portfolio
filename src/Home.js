import React from 'react';
import './index.css';
import Header from './Header';
import Social from './Social';
import Contents from './Contents';


class Home extends React.Component{
  render() {
    return (
      <div>
          <Header title="Portfolio" button="Find Out More"/>
          <Contents />
          <Social />
      </div>
    );
  }
}

export default Home;
