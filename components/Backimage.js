import "./BackimageStyles.css";

import React from "react";
import IntroImg from "../assets/work.jpg"
import {Link} from "react-router-dom";
const Backimg = () => {
    return <div className="background">
    <div className="mask">
       <img className="intro-img" src={IntroImg} alt="Introimg" />
    </div>
    <div className="content">
        <p style={{color:"bisque"}}><b>HI, <span color="red">I'M AMRUTHA S RAO</span>, A FRESHER LOOKING FOR WEB DEVELOPING ROLE JOBS</b></p>
        <h1>COMPUTER ENGINEER GRADUATE</h1>
        <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn-light">CONTACT</Link>
        </div>
    </div>

    </div>
};

export default Backimg;