import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'regenerator-runtime'
import '../styles/final.css'
import './components/app-shell/skip-link'
// import './views/components/app-shell/app-bar'
// import './views/components/app-shell/foot-bar'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
