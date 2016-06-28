import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./components/Layout";
import Todo from "./components/todo/Todo";
import About from "./components/about/About";

const applicationRoot = document.getElementById('application-root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
       <IndexRoute component={Todo} />
       <Route path="about" component={About} />
    </Route>
  </Router>,
applicationRoot);