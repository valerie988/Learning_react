import React from "react";
import "../App.css";
const Header = () => {
    return (
        <nav className="navbar">
            <p>N...V</p>
            <ul>
                <li><a href="./Home">Home</a></li>
                <li><a href="./Pages/About">About</a></li>
                <li><a href="./Pages/Skills">Skills</a></li>
                <li><a href="./Pages/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header;