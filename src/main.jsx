import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider

} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
