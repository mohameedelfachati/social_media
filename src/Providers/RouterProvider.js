import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {Dashboard} from '../components/Pages/Dashboard/Dashboard';
import {Login} from '../components/Login/Login'
import {NotFoundPage} from '../components/Pages/NotFoundPage/NotFoundPage';

export const RouterProvider = ({ children }) => (
    <BrowserRouter>
      {children}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} /> 
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
);
