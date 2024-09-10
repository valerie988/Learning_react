import React from "react";
import { Link } from "react-router-dom"
import "../App.css";
const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <Link to={"/"} >N...V</Link>
            </div>
            <div className="navBar">
                <Link className="link" to={`/Home`}>Home</Link>
                <Link className="link" to={`/About`}>About</Link>
                <Link className="link" to={`/Skills`}>Skills</Link>
                <Link className="link" to={`/Projects`}>Projects</Link>
                <Link className="link" to={`/contact`}>Contact</Link>
            </div>
        </nav>
    )
}

export default Header;