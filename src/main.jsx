import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/scrollToTop'
import ReactGA from "react-ga4";
import AnalyticsTracker from './components/analyticTracker'

ReactGA.initialize("G-BRSJ5K92X6");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AnalyticsTracker />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
