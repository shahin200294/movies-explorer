import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx';
import Movies from './components/Movies.jsx';
import Details from './components/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
      {
        index: true,
        Component: Home
      },
      
      {
        path: "/movies",
        Component: Movies,
        loader: async ()=>{
          const res = await fetch("https://api.tvmaze.com/search/shows?q=girls")

          if(!res.ok){
            throw new Error("Could not found movies")
          }

          return(res)
        }
      },
      {
        path: "/details:id",
        Component: Details,
        loader: async ()=>{
          const res = await fetch("https://api.tvmaze.com/search/shows?q=girls")

          if(!res.ok){
            throw new Error("Movie not found")
          }

          return(res)
        }
      },
    ]
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
