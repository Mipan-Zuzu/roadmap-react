import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './pages/Login.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import {Provider} from "react-redux"
import { store } from './Store/Store.jsx'
import Test from './pages/Test.jsx'
import Protect from './security/Protect.jsx'


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
    element: <Protect>
      <Dashboard />
    </Protect>
  },
  {
    path: "/test",
    element : <Dashboard />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
