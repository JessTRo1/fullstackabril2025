import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { ReadingProvider } from './context/ReadingContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <ReadingProvider>
      <App />
    </ReadingProvider>
    </ThemeProvider>
  </React.StrictMode>
)