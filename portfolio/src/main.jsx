import { StrictMode } from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Contact from "./Pages/contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Footer />
    <Header />
    <Home />
    <About />
    <Skills />
    <Contact />
  </StrictMode>
);
