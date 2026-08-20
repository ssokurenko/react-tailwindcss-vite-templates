import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import { routes } from './routes.ts'
import './css/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: routes,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
