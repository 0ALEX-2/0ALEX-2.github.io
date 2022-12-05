import {HashLink as Link } from "react-router-hash-link";
import React, { useState } from "react";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../photos/MD_SAKIL_logo.png"


const Navbar = () => {
  const [ham, setHam] = useState(false);
  const handleClick = () => setHam(!ham);
  const [color,setColor]=useState(false)
  const changeColor=()=>{
    if(window.scrollY>=100){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener("scroll",changeColor)
  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="logo">
      <Link to="#home">
        {/* <h1>Portfolio</h1> */}
        <img src={logo}/>
      </Link>
       </div>
      <ul className={ham ? "nav-menu active":"nav-menu"}>
        <li>
          <Link to="#home" onClick={handleClick}>Home</Link>
        </li>
        <li>
          <Link to="#about" onClick={handleClick}>About</Link>
        </li>
        <li>
          <Link to="#projects" onClick={handleClick}>Projects</Link>
        </li>
        <li>
          <Link to="#contact" onClick={handleClick}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {ham ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
