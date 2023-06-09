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
import AppiliedJobs from './Components/AppiledJobs/AppiliedJobs';
import Blog from './Components/Blog/Blog';
import Chart from './Components/Chart/Chart';
import Error from './Components/404 Page/Error';

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
      },
      {
        path:'/applied_jobs',
        element:<AppiliedJobs></AppiliedJobs>
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
      },
      {
        path:'/statistics',
        element:<Chart></Chart>
      }
    ]
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
