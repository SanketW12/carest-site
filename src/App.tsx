import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Subscriptions from "./components/Subscriptions";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* <Services />
      <About /> */}
      <Doctors />
      {/* <Contact /> */}
      <Subscriptions />
      <Founder />
      <Footer />
    </div>
  );
}

export default App;
