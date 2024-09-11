import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";
import "../App.css"
const Body = () => {
    return (
        <div className="body">
            <Header />
            <Dashboard />
            <Footer />
        </div>
    )
}
export default Body;