import React from "react";
import "../App.css";

import { chat, cake, blog, github, todolist, schedular  } from "../image"

const Projects = () => {
  return (
    <>
    {/*my projects*/}
    <h1 className="head">My Projects</h1>
    <div className="project"> 
        <img className="img1" src={cake} alt="" />
        <img className="img2" src={chat} alt="" />
        <img className="img3" src={blog} alt="" />
        <img className="img4" src={github} alt="" />
        <img className="img5" src={schedular} alt="" />
        <img className="img6" src={todolist} alt="" />
    </div>
    </>
  );
};

export default Projects;