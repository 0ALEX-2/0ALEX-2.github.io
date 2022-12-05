import React from "react";
import Avater from "../photos/my_pic.jpg";
import "./about.css";
const About = () => {
  return (
    <div id="about" className="aboutPage">
      <div className="content" >
        <img src={Avater} className="avater" alt="image" data-aos="zoom-in"/>
        <div className="text" data-aos="fade-up"
     data-aos-duration="2000">
          <p>
          Hi, my name is <span> MD SAKIL AHMED,</span> an aspiring full-stack MERN developer from Kolkata, INDIA. I completed my graduation from CU in 2016 on Biology. After that, I started teaching in a high school as an assistant teacher. Now, I'm learning full-stack web development since Apr 2022 at Masai School, which is a military-type coding learning platform. I love to learn and explore new things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
