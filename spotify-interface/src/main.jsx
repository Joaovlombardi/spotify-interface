import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetalhesArtista from './components/DetalhesArtista.jsx'
import ConteudoPrincial from './components/ConteudoPrincipal.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <ConteudoPrincial/>},
      { path: '/artista/:id', element: <DetalhesArtista/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
