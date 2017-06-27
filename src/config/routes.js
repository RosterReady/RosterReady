import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Team  from "../components/Team";
import Player from "../components/Player";
import Game from "../components/Game";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path="Team" component={Team} />
    <Route path="Player" component={Player} />
    <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;