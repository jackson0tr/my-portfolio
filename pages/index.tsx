import React, { useState } from "react";
import Nav from "@/components/Nav";
import NavPhone from "@/components/NavPhone";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = ()=> {

  const [navActive,setNavActive] = useState(false);
  const navHandler = () => setNavActive(true);
  const closeNavHandler = () => setNavActive(false);

  return (
  <div className="overflow-hidden custom_bg">
    <NavPhone navActive={navActive} closeNav={closeNavHandler} />
    <Nav showNav={navHandler} />
    <Hero/>
    <About/>
    <Services/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
  );
}

export default Home