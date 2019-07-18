import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import About from './About';
import Home from './Home';
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
