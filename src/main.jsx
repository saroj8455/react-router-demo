import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './index.css';
import Landing from './pages/Landing.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import About from './pages/About.jsx';
import AngularTech from './components/AngularTech.jsx';
import ReactTech from './components/ReactTech.jsx';
import Vue from './components/Vue.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Landing />,
  },
  {
    path: '/about',
    element: <About />,
    children: [
      {
        path: 'angular',
        element: <AngularTech />,
      },
      {
        path: 'react',
        element: <ReactTech />,
      },
      {
        path: 'vue/:vueId',
        element: <Vue />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
