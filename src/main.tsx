import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Top from './pages/Top'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Top />
  </StrictMode>,
)
