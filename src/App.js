import React from "react";
import "./App.css";
import Nav from "./components/app/Nav/Nav";
import Header from "./components/app/Header/Header";
import Projects from "./components/app/Project/Project";
import About from "./components/app/About/About";
import Contact from "./components/app/Contact/Contact";
import Footer from "./components/app/Footer/Footer";

function App() {
  return (
    <div basename="/tothepoint_login" className="bg-black px-4 lg:px-0  ">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
