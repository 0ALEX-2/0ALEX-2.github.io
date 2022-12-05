import React from 'react'
import Navbar from '../components/Navbar'
//import IntroImg from "../photos/intro-bg.jpg";
import IntroImg from "../photos/intro-bg.jpg"
//import "../components/HeroImgStyles.css";
import "./home.css"

const Home = () => {
  return (
    <div>
     <Navbar/>
     <div id="home">
     <div className="mask">
      <img src={IntroImg} alt="background" className="intro-img"/> 
      <div className='logos'>
        <p>Welcome ! </p>
        <h1> I'm a MERN Web Developer</h1>
      </div>
    </div>
     </div>
    
    </div>
  )
}

export default Home