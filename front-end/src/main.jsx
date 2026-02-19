import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Provider } from 'react-redux'
import ErrorPages from './pages/Error.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <div>hi ini halaman utama /</div>,
    errorElement: <ErrorPages />
  },
  {
    path:"/suki",
    element: <App />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
