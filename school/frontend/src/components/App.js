// Import statements
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Home from './home/Home';
import About from './about/About';
import CourseHome from './allcourses/CourseHome';
import Pricing from './pricing/Pricing';
import Blog from './blog/Blog';
import Contact from './contact/Contact';

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
