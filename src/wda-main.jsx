import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource/playfair-display/400-italic.css'
import './index.css'
import WdaPage from './pages/WdaPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WdaPage />
  </StrictMode>,
)
