
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/contact';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" component={Header} />
          <Route path="/" component={Footer} />
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Routes>
    </Router>
  )
};

export default App
