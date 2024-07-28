import { FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyles.css"

import React from "react";


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
               <div className="left">
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                        +91-9108715428</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                        raoamrutha01@gmail.com</h4>
                    </div>
                </div> 

                <div className="right">
                      <h4>About</h4>
                      <p>As a recent Computer Science graduate, 
                        I am passionate about software development 
                        and eager to contribute my skills and knowledge to 
                        innovative projects. I possess a strong foundation 
                        in programming languages like Java and Python, as 
                        well as experience in web development technologies such 
                        as HTML, CSS, and JavaScript</p>
                      <div><FaLinkedin size={20} style={{color:"white", marginRight:"2rem"}}/></div>
                </div>
            </div>
        </div>
    )
    
}

export default Footer;