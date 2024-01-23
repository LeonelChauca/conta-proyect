import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login/Login'
import { Registro } from './components/Registro/Registro'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Registro",
    element: <Registro/>,
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  
      <RouterProvider router={router} />
  
)
