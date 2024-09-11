import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/sideBar"
import "./App.css"
const App = () => {
  return (
    <div className="App">
       <Header />
        <Sidebar />
        <Footer />
       
    </div>
  );
};

export default App;
