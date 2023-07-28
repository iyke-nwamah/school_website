import React, { useState, useEffect } from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true); // Added state for button visibility
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  window.addEventListener("resize", showButton);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO Ik Online Learning"
              title="Great Online Learning Experience"
            />
            <p>
              Home of the best, with quality tech experience assured. Do well to
              explore some of our services.
            </p>
            <div className="button">
              <button className="primary-btn">
                EXPLORE NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
