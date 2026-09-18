import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Layout from './Layout.jsx';
import Movies from './components/Movies.jsx';

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
        path: "/about",
        Component: About
      },
      {
        path: "/movies",
        Component: Movies
      }
    ]
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
