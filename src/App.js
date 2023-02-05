import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import React from 'react'
import Home from "./Pages/Home/Home"
import Challenges from "./Pages/Challenges/Challenges"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"

const Layout = () => {
  return(
    <div className="app">
      <Navbar />
      <Outlet />
      
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/challanges",
        element:<Challenges />
      }
    ]
  }
])


const App = () => {
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
  
}

export default App
