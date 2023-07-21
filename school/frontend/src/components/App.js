import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./common/header/Header";
import About from "./about/About";
import CourseHome from "./allcourses/CourseHome";
import Pricing from "./pricing/Pricing";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Footer from "./common/footer/Footer";
import Home from "./home/Home";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/courses" element={<CourseHome />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/journal" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
