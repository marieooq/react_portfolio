import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import * as serviceWorker from './serviceWorker';
import Home from './Home';


library.add(faIgloo);

class App extends React.Component{
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
