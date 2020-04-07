import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Project from './Components/Project/Project';

export default (
  <Switch>
    <Route path="/project/:project_id" component={Project} />
    <Route path="/" component={Dashboard} />
  </Switch>
)