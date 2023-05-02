import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Standyby } from "./routes/Standyby.tsx"
import { Cash } from "./routes/Cash.tsx"
import { Home } from './routes/Home.tsx'
import { Withdraw } from './routes/Withdraw.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Standyby />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/cash",
        element: <Cash />
      },
      {
        path: "/withdraw",
        element: <Withdraw />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
