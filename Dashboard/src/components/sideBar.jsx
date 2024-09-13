import React from "react";
import { sidebarData } from "./sidebarData";
import "../App.css"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <h3>COREUI NEXT.JS</h3>
            <ul>
            {sidebarData.map((value, key) => {
                return (
                    <li key={key} id={window.location.pathname == value.link ? active : ""} onClick={() => {window.location.pathname = value.to}}>
                        {" "} 
                        <div id="head">{value.head}</div>
                        <div id="icon">{value.icon}</div>
                        <div id="title">
                            {value.title}
                        </div>
                        <div id="button">{value.button}</div>
                        <div id="Arrow">{value.arrow}</div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}
export default Sidebar;