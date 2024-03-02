import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import ErroPage from './pages/ErroPage.jsx'
import ContatoDetalhes from './components/ContatoDetalhes/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contato',
        element: <Contato />
      },
      {
        path: '/contato/:id',
        element: <ContatoDetalhes />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
