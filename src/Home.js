import React from 'react';
import './index.css';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import Contents from './Contents';
import About from './About';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Home extends React.Component{
  render() {
    return (
      <div>
        <Router>
          <Navigation logoTitle="Marie Otaki"/>
          <Header title="Stylish Portfolio" button="Find Out More"/>
          <Contents />
          <Services />
          <div>
            <Route path='/About' component={About}/>
          </div>
       </Router>
      </div>
    );
  }
}

export default Home;
