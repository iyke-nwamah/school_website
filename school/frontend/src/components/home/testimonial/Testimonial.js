import React from "react";
import { testimonial } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial padding">
      <div className="container">
        <Heading subtitle="TESTIMONIAL" title="Our Successful Students" />

        <div className="content grid2">
          {testimonial.map((val) => (
            <div className="items shadow" key={val.id}>
              <div className="box flex">
                <div className="img">
                  <img src={process.env.PUBLIC_URL + val.cover} alt="" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>{val.name}</h2>
                  <span>{val.post}</span>
                </div>
              </div>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
