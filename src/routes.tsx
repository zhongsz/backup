import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from './containers/Home/';

export const RouteMap: React.StatelessComponent<{}> = () => (
  <div>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
    </Switch>
  </div>
);
