import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  
// import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import * as serviceWorker from './serviceWorker';

class App extends React.Component{
  render() {
    return (
      <div>
        <Navigation logoTitle="Marie Otaki"/>
        <Header title="Stylish Portfolio" button="Find Out More"/>
        <Services />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
