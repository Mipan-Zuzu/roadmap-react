import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './pages/Login.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import {Provider} from "react-redux"
import { store } from './Store/Store.jsx'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/login/:id",
    element: <Login />,
  },
  {
    path: "/user/dashboard",
    element: <Dashboard />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
