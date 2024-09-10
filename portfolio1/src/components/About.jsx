import React from "react";
import { pic2 } from "../image"

const About = () => {
  return (
    <div className="About">
      <h1>About Me</h1>

      <div className="aboutMe">
        <img src={pic2} alt="no pic" />
        <p>
          <h3>Curious about me? Here you have it!</h3>
          Valerie was born and raised in Yaounde. Bilingual speaking both Enlish and French fluently. I schooled in Government Bilingual Primary school Mbandjock where i got my First School Leaving Certificate. Then, I continued my sudies in Franky comprehensive Secondary School where i got both my GCE Ordinary level and Advanced level. I am presently in the university of Buea as a Level 300 student studying Software Engineering.
          <br /><br />I am a very friendly and jovial person. I love being around the old for I believed they are very knowledgeable and have much to offer. Not very sportive but took part in the University Games 2024 at Garoua. I love food, listening to music, watching movies and taking long naps. Presently growing a reading spirit. <br /><br />My biggest dream is to become a well-known Full stack develop impacting the whole with my Knowledge.
        </p>
     
      </div>
    </div>
  );
};

export default About;
