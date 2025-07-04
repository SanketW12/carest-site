import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* <Services />
      <About /> */}
      <Doctors />
      {/* <Contact /> */}
      <Founder />
      <Footer />
    </div>
  );
}

export default App;
