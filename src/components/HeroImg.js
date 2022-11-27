import "./HeroImgStyles.css";
import IntroImg from "../photos/intro-bg.jpg";

import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
      <img src={IntroImg} alt="background" className="intro-img"/> 
    </div>
    <div className="content">
      <p>HI, I'M MD SAKIL AHMED.</p>
      <h1>Full Stack MERN Developer.</h1>
      <div>
      <Link to="/project" className="btn">Projects</Link>
      <Link to="/contact" className="btn btn-light">Contact</Link>
    </div>
    </div>
   
  </div>;
};

export default HeroImg;
