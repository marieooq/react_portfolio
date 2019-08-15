import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Work from './Work';
import Work1 from './Work1';
import Work2 from './Work2';
import Work3 from './Work3';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; 
import ScrollToTop from './ScrollToTop';
import {Helmet} from "react-helmet";
import OgpImage from './img/header.jpg';
import { hydrate, render } from "react-dom";
import './App.css';


class App extends React.Component{
  render() {
    return (
      <Router>
        <ScrollToTop>
        <div>
          <Navigation logoTitle="Marie Otaki"/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/work' component={Work}/>
          <Route exact path='/work1' component={Work1}/>
          <Route exact path='/work2' component={Work2}/>
          <Route exact path='/work3' component={Work3}/>
          <Helmet>
            <meta property="og:title" content="Marie Otaki | Portfolio" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="marieotaki.com" />
            <meta property="og:image" content={OgpImage} />
            <meta property="og:site_name" content="Portfolio | Marie Otaki" />
            <meta property="og:description" content="This is the portfoliosite created by Marie Otaki." />
          </Helmet>

        </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
