import React from "react";
import {html, css, figma, js, python, Ireact} from  "../image"

const Skills = () => {
    return (
        <div className="skill">
            <h1>My Skills</h1>
            <p className="text">Passionate, Dedicated and Goal-oreinted</p>
            <div className="icons">
                <div>
                   <img src={html} alt="html" />
                   <p>HTML</p>
                </div>
                <div>
                   <img src={css} alt="css" />
                   <p>CSS</p>
                </div>
                <div>
                   <img src={figma} alt="figma" />
                   <p>FIGMA</p>
                </div>
                <div>
                   <img src={python} alt="python" />
                   <p>PYTHON</p>
                </div>
                <div>
                   <img src={js} alt="javascript" />
                   <p>JAVASCRIPT</p>
                </div>
                <div>
                   <img src={Ireact} alt="react" />
                   <p>REACT</p>
                </div>
            </div>
            <h1>My Experience</h1>
            <div className="experience">
                <p>I have taken part in so many activities which helped increased my skills in the tech field and living together. In 2023, i took part in Tech Innovation Center Foundation Hackathon where i learned how to solve real life problems using a technological approach. I joined TECHRITOMA Mentorship in 2024 where learnt how to work in group and associate with people. Again, I took part in the TIC bootcamp in which i increased my programming skills in Html, Css and Javascript. Did an internship at the TIC foundation where i learnt how to be out-spoken and be versed with the job market.</p>
                <p>Still in 2024, i took part in Beach cleaning and University Game.</p>
            </div>
        </div>
    )
}
export default Skills