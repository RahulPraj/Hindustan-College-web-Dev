import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

let router = createBrowserRouter([
  {
    path:'/',
    element:<div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:'/about',
    element:<div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path:'/dashboard',
    element:<div>
      <Navbar/>
      <Dashboard/>
    </div>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App