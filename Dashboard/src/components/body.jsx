import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import calendar from "./maps";
import "../App.css";
const Body = () => {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<calendar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default Body;
