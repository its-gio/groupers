import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

export default (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
)