import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main/Main.jsx'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  < React.StrictMode >
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode >,
)
