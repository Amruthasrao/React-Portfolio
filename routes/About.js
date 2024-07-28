import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Backimg2 from "../components/Backimg2";
import Aboutcontent from "../components/Aboutcontent";

const About = () => {
    return (
        <div>
            <Navbar/>
            <Backimg2 heading="ABOUT" text="I'm a fresher interested in web developing"/>
            <Aboutcontent/>
            <Footer/>
        </div>
    );
};

export default About;