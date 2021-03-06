import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {Dashboard} from '../components/Pages/Dashboard/Dashboard';
import {App} from '../components/Pages/App/App';
import Login from '../components/Login/Login'
import {NotFoundPage} from '../components/Pages/NotFoundPage/NotFoundPage';
import Message from '../components/Message';

export const RouterProvider = ({ children }) => (
    <BrowserRouter>
      {children}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/app/:name/:url" component={App} /> 
        
          <Route path="/Message" component={Message} />
        </Switch>
      </BrowserRouter>
);
