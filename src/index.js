import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Work from './Work';
import Work1 from './Work1';
import Work2 from './Work2';
import Work3 from './Work3';
import Contact from './Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';


library.add(faIgloo);

class App extends React.Component{
  render() {
    return (
      <Router>
        <div>
          <Navigation logoTitle="Marie Otaki"/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/work' component={Work}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/work1' component={Work1}/>
          <Route exact path='/work2' component={Work2}/>
          <Route exact path='/work3' component={Work3}/>

        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
