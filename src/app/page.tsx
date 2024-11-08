"use client"

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
//import Projects from "@/components/Projects"
import Contact from "@/components/Contac";

function App() {
  return (
    <Router>
        <nav className="flex justify-end space-x-12 p-6 bg-gray-800 text-white ">
        <Link className="transform transition-transform duration-200 hover:scale-125 " to="/">Home</Link>
        <Link className="transform transition-transform duration-200 hover:scale-125"  to="/about">About</Link>
        <Link className="transform transition-transform duration-200 hover:scale-125" to="/skills">Skills</Link>
        <Link className="transform transition-transform duration-200 hover:scale-125" to="/experience">Experience</Link>
        <Link className="transform transition-transform duration-200 hover:scale-125" to="/education">Education</Link>
        <Link className="transform transition-transform duration-200 hover:scale-125" to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
