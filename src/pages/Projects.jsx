import React from 'react'
import "./projects.css"
import pharmeasy from "../photos/pharmeasy.JPG"
import yoox from "../photos/yoox.JPG"
import { AiFillHtml5, } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3,IoLogoJavascript,IoLogoGithub} from "react-icons/io";

const Projects = () => {
  return (
    <div id="projects" className='projects'>
      <h1>Projects</h1>


  <div className='pharmeasy' data-aos="fade-up"
    data-aos-duration="1000">
    <div className='banner'> <img src={pharmeasy} alt="banner" /></div>
    <div className='aboutSec'>
    <h3>This is a clone of PharmEasy.com. It is an e-commerce website, they sells medicines and healthe related services accross India. This is a collaborative project. </h3> 
    <div className='techUsed'>
      <h2>Tech Used</h2>
      <div className='icons' data-aos="zoom-in">
           <AiFillHtml5/>
           <IoLogoCss3/>
           <IoLogoJavascript/>
      </div>
    </div>
   <div className='buttns' >
       <button><a href="https://enchanting-bonbon-ad5692.netlify.app/" target="_blank">DEMO</a></button>
       <button><a href="https://github.com/nitinkrs/ready-lock-9044" target="_blank"><IoLogoGithub/></a></button>
   </div>
    </div>
  </div>
  

  <div className='pharmeasy' data-aos="fade-up"
    data-aos-duration="1000">
    <div className='banner'> <img src={yoox} alt="banner" /></div>
    <div className='aboutSec'>
    <h3>This is a clone of Yoox.com. It is an e-commerce website, they sells Clothes, Shoes and various beauty products. This is a collaborative project. </h3> 
    <div className='techUsed'>
      <h2>Tech Used</h2>
      <div className='icons' data-aos="zoom-in">
           <AiFillHtml5/>
           <IoLogoCss3/>
           <IoLogoJavascript/>
           <FaReact/>
      </div>
    </div>
   <div className='buttns' >
       <button><a href="https://luminous-sprinkles-3af9e6.netlify.app/" target="_blank">DEMO</a></button>
       <button><a href="https://github.com/saikhmirsat/energized-rock-3853" target="_blank"><IoLogoGithub/></a></button>
   </div>
    </div>
  </div>
  

  </div>
  
  )
}

export default Projects