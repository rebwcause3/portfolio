import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource/playfair-display/400-italic.css'
import './index.css'
import TalkPage from './pages/TalkPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TalkPage />
  </StrictMode>,
)
