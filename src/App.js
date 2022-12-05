import React from "react";
//import './App.css'; import "./index.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Github from "./pages/gitState_calender";
//import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Home/>
      <About/>
      <Github/>
      <Projects/>
       <Contact/> 
    </div>
  );
}

export default App;
