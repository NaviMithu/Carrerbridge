
import React from "react";
import Hero from "./Components/Hero/Hero.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Card from "./Components/Card/Card.jsx";
const App= ()=>{
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card/>
      <About/>
     
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App;