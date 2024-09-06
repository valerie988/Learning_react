import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Skills from "./Pages/Skills.jsx";
import Contact from "./Pages/contact.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header />
    <Home />
    <About />
    <Footer />
  </StrictMode>
);
