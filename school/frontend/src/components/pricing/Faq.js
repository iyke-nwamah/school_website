import React, { useState } from "react";
import { faq } from "../../dummydata";
import Heading from "../common/heading/Heading";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Heading subtitle="FAQS" title="Frequently Asked Questions" />
      <section className="faq">
        <div className="container">
          {faq.map((val, index) => (
            <div className="box" key={index}>
              <button className="accordion" onClick={() => toggleAccordion(index)}>
                <h2>{val.title}</h2>
                <span>
                  <i className={`fa fa-chevron-${activeIndex === index ? "down" : "right"}`}></i>
                </span>
              </button>
              {activeIndex === index && (
                <div className="text">
                  <p>{val.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
