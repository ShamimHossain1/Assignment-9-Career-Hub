import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import JobDetails from './Components/Home/FeaturedJobs/JOBS/JobDetails/JobDetails';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <LayOut></LayOut>,
    children:[
      {
          path:'/',
          element:<Home></Home>
      },
      {
        path:'/job_details',
        element:<JobDetails></JobDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
