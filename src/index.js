import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './components/Body';
import {RouterProvider} from 'react-router-dom';

import router from './routes';
import Frontend from './components/Frontend';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* <Frontend /> */}
  </React.StrictMode>
  
);