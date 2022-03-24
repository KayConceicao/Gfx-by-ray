import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./Styles/app.scss";

// Components 
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";

function App() {

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="Gfx-by-ray/" element={<Home />} />
          <Route path="Gfx-by-ray/About" element={<About />} />
        </Routes>
        <Footer/>
      </Router> 
    </div>
    
  );
}

export default App;
