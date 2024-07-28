import "./Aboutcontentstyles.css";
import React from "react";

 const Aboutcontent = () => {
    return(
        <div className="about">
            <div className="left">
            <h1>SKILLS</h1>
                <div className="skillset">
                    <div className="skill-name">HTML,CSS,JS,REACT</div>
                    <div className="skillbar">
                        <div className="skillper" per="85%" style={{maxWidth:"85%"}}></div>
                    </div>
                </div>

                <div className="skillset">
                    <div className="skill-name">C LANGUAGE</div>
                    <div className="skillbar">
                        <div className="skillper" per="65%" style={{maxWidth:"65%"}}></div>
                    </div>
                </div>

                <div className="skillset">
                    <div className="skill-name">PYTHON</div>
                    <div className="skillbar">
                        <div className="skillper" per="70%" style={{maxWidth:"70%"}}></div>
                    </div>
                </div>

                <div className="skillset">
                    <div className="skill-name">POSTGRE SQL</div>
                    <div className="skillbar">
                        <div className="skillper" per="60%" style={{maxWidth:"60%"}}></div>
                    </div>
                </div>
        </div>
        
        <div>
            <div>
                <h1 style={{color:"seagreen", textAlign:"center", padding:"6px"}}>INTERNSHIP</h1>
                <h2 style={{color:"burlywood", textAlign:"center", padding:"6px"}}>AI-ML IN PYTHON</h2>
                <p style={{textAlign:"center"}}>Learnt several machine learning algos to analyze real time database which includes supervised and unsupervised learning by <span style={{color:"turquoise"}}>NASTECH</span> company.</p>
               
                   
                
            </div>
        </div>
        </div> 

        
    );
 }

 export default Aboutcontent;