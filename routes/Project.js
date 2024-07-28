import React from "react"
import Navbar from "../components/Navbar";

import Backimg2 from "../components/Backimg2"; 
import Work from "../components/Work";
import Footer from "../components/Footer";
const Project = () => {
    return (
        <div>
            <Navbar/>
            <Backimg2 heading="PROJECTS" text="Some of my most recent works"/>
            <Work/>
            <Footer/>
        </div>
    );
};

export default Project;