import React from 'react';
import './index.css';
import Header from './Header';
import Services from './Services';
import Contents from './Contents';


class Home extends React.Component{
  render() {
    return (
      <div>
          <Header title="Portfolio" button="Find Out More"/>
          <Contents />
          <Services />
      </div>
    );
  }
}

export default Home;
