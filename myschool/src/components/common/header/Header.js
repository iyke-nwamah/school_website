import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Head from "./Head";

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <Head />
      <header>
      <nav className="flexSB">
        <ul className={click ? "mobile-nav" : "flexSB"}>
          <li>
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li>
            <Link to="/courses">All Courses</Link>
          </li>
          <li>
            <Link to="/about" className="nav-links1" onClick={closeMobileMenu}>About</Link>
          </li>
          <li>
            <Link to="/pricing" className="nav-links1" onClick={closeMobileMenu}>Pricing</Link>
          </li>
          <li>
            <Link to="/Journal" className="nav-links1" onClick={closeMobileMenu}>Journal</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links1" onClick={closeMobileMenu}>Contact</Link>
          </li>
          <li>
            <Link to="/login" className="nav-links1" onClick={closeMobileMenu}>Login</Link>
          </li>
        </ul>
        <div className="start">
          <div className="button">GET CERTIFICATE</div>
        </div>
        <button className="toggle" onClick={() => setClick(!click)}>
          {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}

        </button>
      </nav>
      </header>
    </>
  );
};

export default Header;
