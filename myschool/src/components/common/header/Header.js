import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from './Button';

function Header() {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleToggle = () => setToggle(!toggle);

   const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          IK ONLINE TUTORIAL
          <i className="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-links" onClick={closeMobileMenu}>
            All Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
             About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pricing"
              className="nav-links"
              onClick={closeMobileMenu}
            >
               Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/journal"
              className="nav-links"
              onClick={closeMobileMenu}
            >
             Journal
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Contact </Button>}
      </nav>
      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </>
  );
}

export default Header;
