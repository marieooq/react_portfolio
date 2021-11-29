import React from "react";
import Home from "features/home";
import About from "features/about/About";
import Works from "features/works";
import Blog from "features/blog/Blog";
import WorkYouTubeClone from "features/works/components/WorkYouTubeClone";
import WorkCOS from "features/works/components/WorkCOS";
import WorkAYACancer from "features/works/components/WorkAYACancer";
import WorkGreenSpoon from "features/works/components/WorkGreenSpoon";
import WorkMsgif from "features/works/components/WorkMsgif";
import WorkStockPrice from "features/works/components/WorkStockPrice";
import WorkCrudBlog from "features/works/components/WorkCrudBlog";
import WorkPhotomap from "features/works/components/WorkPhotomap";
import WorkReactBlog from "features/works/components/WorkReactBlog";
import WorkReactNote from "features/works/components/WorkReactNote";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import ScrollToTop from "./app/util/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/works/youtube-clone" component={WorkYouTubeClone} />
        <Route exact path="/works/cos" component={WorkCOS} />
        <Route exact path="/works/aya-cancer" component={WorkAYACancer} />
        <Route exact path="/works/green-spoon" component={WorkGreenSpoon} />
        <Route exact path="/works/msgif" component={WorkMsgif} />
        <Route exact path="/works/stock-price" component={WorkStockPrice} />
        <Route exact path="/works/crud-blog" component={WorkCrudBlog} />
        <Route exact path="/works/photomap" component={WorkPhotomap} />
        <Route exact path="/works/react-blog" component={WorkReactBlog} />
        <Route exact path="/works/react-note" component={WorkReactNote} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
