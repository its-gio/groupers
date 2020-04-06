import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/ProjectDetails';

export default (
  <Switch>
    <Route path="/project/:project_id" component={ProjectDetails} />
    <Route path="/" component={Dashboard} />
  </Switch>
)