import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContextProvider } from './Providers/ContextProvider';
import {RouterProvider} from './Providers/RouterProvider';

const initialState = {
  connected : false 
}
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider value={initialState}>
    <RouterProvider></RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
