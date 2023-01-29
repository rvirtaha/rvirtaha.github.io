import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App language='en' />
  },
  {
    path: '/en',
    element: <App language='en' />
  },
  {
    path: '/fi',
    element: <App language='fi' />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);