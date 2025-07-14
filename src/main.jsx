import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Statistics from './Statistics.jsx';
import ErrorPage from './ErrorPage.jsx';
import HomeChild from './HomeChild.jsx';
import JobDetails from './JobDetails.jsx';
import AppliedJobs from './AppliedJobs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
  path: "/homeChild",
    element:<HomeChild></HomeChild>
      },
      {
         path: "/statistics",
    element:<Statistics></Statistics>
      },
      {
     path: "/applied",
    element:<AppliedJobs></AppliedJobs>,
     loader:()=>fetch('jobs.json')
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('jobs.json')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
