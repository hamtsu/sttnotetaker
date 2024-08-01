import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import DocumentPage from './pages/DocumentPage';
import ErrorPage from './pages/ErrorPage';

const router = createHashRouter([
  {
    path: "sttnotetaker/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  { 
    path: "sttnotetaker/document/:documentId",
    element: <DocumentPage />,
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
