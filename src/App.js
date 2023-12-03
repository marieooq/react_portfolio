import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import WorkYouTubeClone from "./pages/works/works/WorkYouTubeClone";
import WorkCOS from "./pages/works/works/WorkCOS";
import WorkAYACancer from "./pages/works/works/WorkAYACancer";
import WorkGreenSpoon from "./pages/works/works/WorkGreenSpoon";
import WorkMsgif from "./pages/works/works/WorkMsgif";
import WorkStockPrice from "./pages/works/works/WorkStockPrice";
import WorkCrudBlog from "./pages/works/works/WorkCrudBlog";
import WorkPhotomap from "./pages/works/works/WorkPhotomap";
import WorkReactBlog from "./pages/works/works/WorkReactBlog";
import WorkReactNote from "./pages/works/works/WorkReactNote";
import WorkNeoBrutalism from "./pages/works/works/WorkNeoBrutalism";
import WorkYouMatterAI from "./pages/works/works/WorkYouMatterAI";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import ScrollToTop from "./app/util/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/works/youmatter-ai" component={WorkYouMatterAI} />
        <Route exact path="/works/neo-brutalism" component={WorkNeoBrutalism} />
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
