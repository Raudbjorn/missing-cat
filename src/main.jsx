import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the font files
import '@fontsource/source-sans-pro/400.css'  // Regular
import '@fontsource/source-sans-pro/600.css'  // Semi-bold
import '@fontsource/source-sans-pro/700.css'  // Bold
import '@fontsource/fraunces/600.css'        // Semi-bold
import '@fontsource/fraunces/700.css'        // Bold

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)