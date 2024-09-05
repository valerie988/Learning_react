import { StrictMode } from 'react'
import { createRoot } from 'react-dom'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/contact';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
    <Header />
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
  </StrictMode>,
)
