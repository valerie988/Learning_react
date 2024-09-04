import React from "react";
import {NavLink} from `react-router-dom`

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">My Portfolio</div>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/">Projects</NavLink></li>
                <li><NavLink to="/">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header;