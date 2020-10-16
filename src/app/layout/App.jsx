import React from 'react';
import Navigation from '../../components/Navigation';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Works from '../../pages/works/Works';
import Blog from '../../pages/blog/Blog';
import WorkCOS from '../../pages/works/WorkCOS';
import WorkAYACancer from '../../pages/works/WorkAYACancer';
import WorkGreenSpoon from '../../pages/works/WorkGreenSpoon';
import WorkMsgif from '../../pages/works/WorkMsgif';
import WorkStockPrice from '../../pages/works/WorkStockPrice';
import WorkCrudBlog from '../../pages/works/WorkCrudBlog';
import WorkPhotomap from '../../pages/works/WorkPhotomap';
import WorkReactBlog from '../../pages/works/WorkReactBlog';
import WorkReactNote from '../../pages/works/WorkReactNote';
// import WorkIllustration from "./WorkIllustration";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import ScrollToTop from '../util/ScrollToTop';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div id="wrapper">
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/blog" component={Blog} />
              <Route
                exact
                path="/works/cos"
                component={WorkCOS}
              />
              <Route
                exact
                path="/works/aya-cancer"
                component={WorkAYACancer}
              />
              <Route
                exact
                path="/works/green-spoon"
                component={WorkGreenSpoon}
              />
              <Route exact path="/works/msgif" component={WorkMsgif} />
              <Route
                exact
                path="/works/stock-price"
                component={WorkStockPrice}
              />
              <Route exact path="/works/crud-blog" component={WorkCrudBlog} />
              <Route exact path="/works/photomap" component={WorkPhotomap} />
              <Route exact path="/works/react-blog" component={WorkReactBlog} />
              <Route exact path="/works/react-note" component={WorkReactNote} />
              {/* <Route exact path="/illustration" component={WorkIllustration} /> */}
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
