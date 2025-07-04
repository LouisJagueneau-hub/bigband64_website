import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Layout from './components/Layout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>
)
