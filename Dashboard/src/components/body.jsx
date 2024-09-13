import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";
import Fullcalendar from "./calendar";
import Map from "./map";
import "../App.css";
const Body = () => {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Routes>
         <Route element={<Dashboard />} path="/"> </Route>
         <Route element={<Dashboard />} path="/Dashboard"> </Route>
         <Route element={<Fullcalendar />} path="/Calendar"> </Route>
         <Route element={<Map />} path="/map"> </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default Body;
