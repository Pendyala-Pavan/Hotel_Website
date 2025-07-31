import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import ReservationForm from "../src/components/ReservationForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<ReservationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
