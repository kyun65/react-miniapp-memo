import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Top from './pages/top.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Top />
  </StrictMode>,
)
