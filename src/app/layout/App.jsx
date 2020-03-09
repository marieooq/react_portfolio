import React from 'react';
import Navigation from '../../Navigation';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Works from '../../pages/works/Works';
import Blog from '../../pages/blog/Blog';
import WorkMsgif from '../../pages/works/WorkMsgif';
import WorkPhotomap from '../../pages/works/WorkPhotomap';
import WorkReactBlog from '../../pages/works/WorkReactBlog';
import WorkReactNote from '../../pages/works/WorkReactNote';
// import WorkIllustration from "./WorkIllustration";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import ScrollToTop from '../../ScrollToTop';

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
