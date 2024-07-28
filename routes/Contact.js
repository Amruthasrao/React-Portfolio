import React from "react"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Backimg2 from "../components/Backimg2";
import Form from "../components/Form";
const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Backimg2 heading="CONTACT" text="Let's have a chat"/>
            <Form/>
           <Footer/>
        </div>
    );
    
};

export default Contact;