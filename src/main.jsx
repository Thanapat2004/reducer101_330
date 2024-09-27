import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FormComponent from './FormComponent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormComponent></FormComponent>
  </StrictMode>,
)