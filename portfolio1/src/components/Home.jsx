import React from "react";
import { pic1, facebook, twitter, pinterest } from "../image"

const Home = () => {

    return (
        <div className="Home">
            <div className="text">
                <h1>Hello, I`m Neh Valerie</h1>
                <p>I am 19 years old. A student from the university of Buea, College Of Technology under the computer engineering department studying Software engineering. An aspiring full stack developper presently learning frontend. </p>
                <div className="icons">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                </div>
            </div>
            <img src={ pic1 } alt="no picture"/>

        </div>
    )
}
export default Home;                                                                                                                                                                                