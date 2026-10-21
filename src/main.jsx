import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production pages contain the complete pre-rendered page for people and crawlers.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
