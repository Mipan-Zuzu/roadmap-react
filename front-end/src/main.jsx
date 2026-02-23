import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ErrorPages from './pages/Error.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/Store.jsx'
  
const router = createBrowserRouter ([
  {
    path: "/",
    element: <div>hi ini halaman utama /</div>,
    errorElement: <ErrorPages />
  },
  {
    path:"/data/showpage",
    element: <App />,
  },
  {
    path: "/data/showpage/:id",
    element: <App/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
