import React from "react";
import {location, email, phone} from "../image"

const Contact = () => {
    return (
        <>
        <h1 className="head">Contact Me</h1>
        <div className="contact">
            <div className="address">
                <img src={phone} alt="phone" />
                <p>Phone</p>
                <p>+237 652-17-31-71</p>
                <p>+237 656-82-20-01</p>
            </div>
            <div className="address">
                <img src={email} alt="email" />
                <p>Email</p>
                <p>neh16valerie@gmail.com</p>
            </div>
            <div className="address">
                <img src={location} alt="location" />
                <p>Location</p>
                <p>Yaounde - Soa</p>
            </div>
        </div>
        </>
    )
}
export default Contact 