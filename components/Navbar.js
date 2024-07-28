import "./NavbarStyles.css";

import React, { useState } from "react";


import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa";
const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () =>  setClick(!click);

    const[color,setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

window.addEventListener("scroll",changeColor);
    return(
        <div className={color?"header header-bg":"header"}>
            
            <Link to="/" className="nav-items">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click?"nav-menu active":"nav-menu"}>
                <li>
                    <Link to="/"   smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="/project"   smooth={true} duration={500}>Project</Link>
                </li>
                <li>
                    <Link to="/about"  smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link to="/contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:"fff"}}/>):<FaBars size={20} style={{color:"fff"}}/>}
                
                
            </div>
          
        </div>
    );
}
export default Navbar;
