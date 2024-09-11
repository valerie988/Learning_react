import React from "react";
import { sidebarData } from "./sidebarData";
import "../App.css"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
            {sidebarData.map((value, key) => {
                return (
                    <li key={key} onClick={() => {window.location.pathname = value.link}}>
                        {" "}
                        <div>{value.icon}</div> 
                        <div>
                            {value.title}
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}
export default Sidebar;