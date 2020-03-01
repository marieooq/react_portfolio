import React from 'react';
import './index.css';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Works from './Works';
import Blog from './Blog';
import WorkMsgif from './WorkMsgif';
import WorkPhotomap from './WorkPhotomap';
import WorkReactBlog from './WorkReactBlog';
import WorkReactNote from './WorkReactNote';
// import WorkIllustration from "./WorkIllustration";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import ScrollToTop from './ScrollToTop';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div id="wrapper">
            <Navigation />

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/works/msgif" component={WorkMsgif} />
            <Route exact path="/works/photomap" component={WorkPhotomap} />
            <Route exact path="/works/react-blog" component={WorkReactBlog} />
            <Route exact path="/works/react-note" component={WorkReactNote} />
            {/* <Route exact path="/illustration" component={WorkIllustration} /> */}
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
